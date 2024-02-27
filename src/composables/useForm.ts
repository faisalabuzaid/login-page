import { ref } from 'vue';

interface FormField {
    value: string;
    error: string | null;
}

interface FormFields {
    [key: string]: FormField;
}

interface FormErrors {
    [key: string]: string | null;
}

interface UseFormOptions {
    initialValues: FormFields;
    onSubmit: (values: FormFields) => void;
    validate?: (values: FormFields) => FormErrors;
}

export default function useForm(options: UseFormOptions) {
    const formValues = ref(options.initialValues);

    const formErrors = ref<FormErrors>({});

    const validateForm = () => {
        if (options.validate) {
            formErrors.value = options.validate(formValues.value);
        }
    };

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        validateForm();

        if (Object.values(formErrors.value).every((error) => !error)) {
            options.onSubmit(formValues.value);
        }
    };

    return {
        formValues,
        formErrors,
        handleSubmit,
    };
}
