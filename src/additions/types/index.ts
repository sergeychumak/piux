// I${К кому относится?}${что?}

// ==============================================
// FORM
// ==============================================

  export interface IFormDescription {
    id: string;
    component: string;
    props: ISimpleObject;
  }

// ==============================================
// TABLE
// ==============================================

  export interface ITableHeader {
    [index: string]: ITableHeaderElement
  }

  interface ITableHeaderElement {
    component: string;
    label: string;
  }

  export interface ILoadTableHeaderResponse {
    name: string;
    header: ITableHeader;
  }


// ==============================================
// COMPONENTS
// ==============================================

  export interface IComponentsList {
    [index: string]: string;
  }

// ==============================================
// other
// ==============================================

  export interface ISimpleObject {
    [index: string]: any;
  }
