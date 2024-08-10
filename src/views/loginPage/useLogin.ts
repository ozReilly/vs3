import { FormInstance } from 'element-plus';
import { useLoginResult } from './types';
import { userCaptcha, userCreate, userType } from '@/apis/user.ts';
import { UserAccountResultData, UserCaptchaParams, UserTypeParams } from '@/apis/model/userModel.ts';

function useLogin() {
  const isH5 = inject('isH5');

  console.log('login.vue');

  const formData = reactive({
    username: '',
    password: '',
    code: '',
    imgCode: '',
  });
  const sendData = ref<UserCaptchaParams>();
  const create = () => {
    userCreate().then((result) => {
      console.log(result);
      if (result.data.code === 0) {
        const createData: UserAccountResultData = result.data.data;

        userType({
          lang: createData.languageCode,
          domainType: 3,
        }).then((type) => {
          console.log(type);
          sendData.value = {
            token: createData.token,
            uid: createData.uid,
            pid: 888,
            versionCode: 100445,
            versionName: 'v1.4.445',
            os: 'H5-iOS',
            osVersionName: 'Windows 10',
            osVersionCode: 10,
            mac: '0CD51ED8C9C3',
            deviceModel: 'Chrome 127.0.0.0',
            siteNo: 7,
            realm: createData.realm,
            process: createData.process,
            lang: createData.languageCode,
            time: Date.now(),
          };
          sendCode();
        });
      }
    });
  };
  const sendCode = async () => {
    const res = await userCaptcha(sendData.value);
    formData.imgCode = `data:image/jpg;base64,${res.data.data}`;
  };
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
  onMounted(() => {
    create();
  });
  const ruleFormRef = ref<FormInstance>();
  return {
    isH5,
    formData,
    onSubmit,
    submitForm,
    ruleFormRef,
    sendCode,
    create,
  } as unknown as useLoginResult<typeof formData>;
}

export default useLogin;
