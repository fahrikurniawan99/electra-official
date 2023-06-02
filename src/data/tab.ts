export type Tabs = {
  value: TabValue;
  label: string;
};

export type TabValue = 1 | 2 | 3;

const TabItems: Tabs[] = [
  {
    label: "Headphone",
    value: 1,
  },
  {
    label: "Keyboard",
    value: 2,
  },
  {
    label: "Mouse",
    value: 3,
  },
];

export default TabItems;
