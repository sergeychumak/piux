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

// ==============================
// TABLE
// ==============================
// ==============================

export type TypeDescriptionTable = {
  name: string;
  header: TypeDescriptionTable__header;
  body: { [index: string]: any }
}

export type TypeDescriptionTable__header = {
  [index: string]: TypeDescriptionTable__headerColumns
};

export type TypeDescriptionTable__headerColumns = {
  component: string;
  label: string;
}






export type TypeTable = {
  component: string;
  label: string;
}
