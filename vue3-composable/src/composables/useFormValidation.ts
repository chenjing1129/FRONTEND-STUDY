import { ref, reactive } from 'vue';

interface Rule {
  validate: (value: any) => boolean;
  message: string;
}

interface ValidationRules {
  [field: string]: Rule[];
}

interface useFormValidationReturn {
  values: Record<string, any>;
  errors: Record<string, string>;
  setValue: (field: string, value: any) => void;
  validate: () => boolean;
  reset: () => void;
  addRule: (field: string, rule: Rule) => void;
}

function useFormValidation(): useFormValidationReturn {
  const values = reactive<Record<string, any>>({});
  const errors = reactive<Record<string, string>>({});
  const rules: ValidationRules = {};

  const setValue = (field: string, value: any) => {
    values[field] = value;
  };

  const validateField = (field: string): boolean => {
    const fieldRules = rules[field];
    if (!fieldRules) return true;
    let isValid = true;
    errors[field] = ''; // Reset error message
    for (const rule of fieldRules) {
      if (!rule.validate(values[field])) {
        errors[field] = rule.message;
        isValid = false;
      }
    }
    return isValid;
  };

  const validate = (): boolean => {
    let formIsValid = true;
    for (const field in rules) {
      if (!validateField(field)) {
        formIsValid = false;
      }
    }
    return formIsValid;
  };

  const addRule = (field: string, rule: Rule) => {
    if (!rules[field]) {
      rules[field] = [];
    }
    rules[field].push(rule);
  };

  const reset = () => {
    for (const field in values) {
      values[field] = ''; // Reset values to empty
    }
    for (const field in errors) {
      errors[field] = ''; // Reset errors to empty
    }
  };

  return { values, errors, setValue, validate, reset, addRule };
}

export default useFormValidation;