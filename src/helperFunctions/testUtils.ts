export const fill = (searchNode: any, selector: string, data: string) => {
  const input = searchNode.find(selector);
  (input.instance() as any).value = data;
  input.simulate('change');
};
