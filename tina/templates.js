export function homepageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "string",
      name: "subheading",
      label: "subheading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "nav_link",
      label: "Navigation title",
      required: true
    }
  ];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "string",
      name: "subheading",
      label: "subheading",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "nav_link",
      label: "Navigation title",
      required: true
    }
  ];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "header_image",
      label: "header image",
    },
  ];
}