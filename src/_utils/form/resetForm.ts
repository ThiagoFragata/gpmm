export function resetForm(form: any, values: any): void {
  form.reset();
  Object.keys(values).forEach(key => {
    form.resetFieldState(key);
  });
}
