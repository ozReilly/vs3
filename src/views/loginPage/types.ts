import { FormInstance } from 'element-plus';
import { Ref } from 'vue';
// , TParams extends unknown[]
export interface useLoginResult<TData> {
  formData: TData;
  onSubmit: ($event: SubmitEvent | object) => void;
  submitForm: (formEl: FormInstance | undefined) => Promise<void>;
  ruleFormRef: Ref<FormInstance>;
  isH5: boolean;
  sendCode: (formEl: FormInstance | undefined) => Promise<void>;
}
