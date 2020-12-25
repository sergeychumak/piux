export type tDescriptionForm = {
  form: tForm;
  data: tData[];
}

type tForm = {
  name: string;
}

type tData = {
  component: string;
  id: string;
  props?: any;
}
