import { useState, useCallback } from 'react';
import { isValidEmail, isValidPhone, sanitizeInput } from '@/lib/utils';

/**
 * Tipos del formulario de contacto
 */
export interface ContactFormData {
  nombre: string;
  empresa: string;
  telefono: string;
  email: string;
  servicio: string;
  mensaje: string;
}

export interface ContactFormErrors {
  nombre?: string;
  email?: string;
  telefono?: string;
  servicio?: string;
  mensaje?: string;
}

/**
 * Hook para manejo completo del formulario de contacto
 * 
 * Características:
 * - Validación en tiempo real
 * - Estados de envío con feedback visual
 * - Sanitización de inputs
 * - Fácil integración con APIs
 * 
 * @example
 * const { 
 *   formData, 
 *   errors, 
 *   touched, 
 *   isSubmitting, 
 *   isSuccess,
 *   handleChange, 
 *   handleBlur, 
 *   handleSubmit,
 *   getInputClass 
 * } = useContactForm();
 */
export function useContactForm() {
  // Estado del formulario
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    servicio: '',
    mensaje: '',
  });

  // Estado de errores
  const [errors, setErrors] = useState<ContactFormErrors>({});
  
  // Campos tocados (para validación on-blur)
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  // Estado de envío
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  /**
   * Validar un campo específico
   */
  const validateField = useCallback((
    name: keyof ContactFormData, 
    value: string
  ): string | undefined => {
    switch (name) {
      case 'nombre':
        if (!value.trim()) return 'El nombre es obligatorio';
        if (value.trim().length < 2) return 'El nombre debe tener al menos 2 caracteres';
        break;
      
      case 'email':
        if (!value.trim()) return 'El email es obligatorio';
        if (!isValidEmail(value)) return 'Ingresá un email válido';
        break;
      
      case 'telefono':
        if (value && !isValidPhone(value)) return 'Ingresá un teléfono válido';
        break;
      
      case 'servicio':
        if (!value) return 'Seleccioná un servicio';
        break;
      
      case 'mensaje':
        if (!value.trim()) return 'El mensaje es obligatorio';
        if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        break;
    }
    return undefined;
  }, []);

  /**
   * Validar todo el formulario
   */
  const validateForm = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {};
    
    const fields: (keyof ContactFormData)[] = ['nombre', 'email', 'servicio', 'mensaje'];
    
    fields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        (newErrors as Record<string, string | undefined>)[field] = error;
      }
    });

    // Teléfono es opcional pero validado si se completa
    const telefonoError = validateField('telefono', formData.telefono);
    if (telefonoError) newErrors.telefono = telefonoError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, validateField]);

  /**
   * Manejar cambios en inputs
   */
  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    // Validar campo en tiempo real si ya fue tocado
    if (touched[name] && name !== 'empresa') {
      const error = validateField(name as keyof ContactFormData, sanitizedValue);
      setErrors((prev) => ({
        ...prev,
        [name as keyof ContactFormErrors]: error,
      }));
    }
  }, [touched, validateField]);

  /**
   * Manejar blur de inputs
   */
  const handleBlur = useCallback((
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    if (name !== 'empresa') {
      const error = validateField(name as keyof ContactFormData, value);
      setErrors((prev) => ({
        ...prev,
        [name as keyof ContactFormErrors]: error,
      }));
    }
  }, [validateField]);

  /**
   * Obtener clase CSS según estado del input
   */
  const getInputClass = useCallback((name: keyof ContactFormData): string => {
    const baseClass = 'sjg-input';
    
    // Empresa no tiene validación
    if (name === 'empresa') return baseClass;
    
    const isTouched = touched[name];
    const hasError = errors[name];
    const hasValue = formData[name];
    
    if (isTouched && hasError) return `${baseClass} sjg-input-error`;
    if (isTouched && !hasError && hasValue) return `${baseClass} sjg-input-success`;
    
    return baseClass;
  }, [touched, errors, formData]);

  /**
   * Manejar envío del formulario
   */
  const handleSubmit = useCallback(async (
    e: React.FormEvent
  ): Promise<boolean> => {
    e.preventDefault();
    
    // Marcar todos los campos como tocados
    setTouched({
      nombre: true,
      empresa: true,
      telefono: true,
      email: true,
      servicio: true,
      mensaje: true,
    });
    
    setSubmitError('');

    if (!validateForm()) {
      return false;
    }

    setIsSubmitting(true);

    try {
      // Simular envío - REEMPLAZAR CON API REAL
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Ejemplo de integración con API:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // 
      // if (!response.ok) throw new Error('Error al enviar');

      setIsSuccess(true);
      return true;
    } catch (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  /**
   * Resetear formulario
   */
  const resetForm = useCallback(() => {
    setFormData({
      nombre: '',
      empresa: '',
      telefono: '',
      email: '',
      servicio: '',
      mensaje: '',
    });
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
    setIsSuccess(false);
    setSubmitError('');
  }, []);

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    submitError,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    getInputClass,
  };
}

export default useContactForm;
