// I${К кому относится?}${что?}

// ==============================================
// FORM
// ==============================================

  export interface IFormDescription {
    id: string;
    component: string;
    props: { [index: string]: any };
  }

// ==============================================
// LIST COMPONENTS
// ==============================================

  export interface IComponentsList {
    [index: string]: string;
  }
