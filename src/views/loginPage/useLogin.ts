import { FormInstance } from 'element-plus';
import { useLoginResult } from './types';

function useLogin() {
  const isH5 = inject('isH5');

  console.log('login.vue');

  const formData = reactive({
    username: '',
    password: '',
  });
  const onSubmit = ($event: SubmitEvent | object) => {
    console.log('formData', formData, $event);
    if ($event instanceof SubmitEvent) {
      $event?.preventDefault();
    } else {
      console.log('$event', $event);
    }
  };
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!');
      } else {
        console.log('error submit!', fields);
      }
    });
  };
  const ruleFormRef = ref<FormInstance>();
  return {
    isH5,
    formData,
    onSubmit,
    submitForm,
    ruleFormRef,
  } as unknown as useLoginResult<typeof formData>;
}
export default useLogin;
