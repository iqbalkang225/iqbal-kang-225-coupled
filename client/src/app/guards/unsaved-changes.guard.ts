import { CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../pages/explore-page/member-edit/member-edit.component';

export const unsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (
  component
) => {
  if (component.form?.dirty)
    return confirm('You will loose all the unsaved changes.');
  return true;
};
