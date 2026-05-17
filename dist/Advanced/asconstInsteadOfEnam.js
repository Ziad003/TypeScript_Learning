"use strict";
//set of fixed string leteral ek jaygay rakhe
Object.defineProperty(exports, "__esModule", { value: true });
// type userRole = "Admin" | "Editor" | "Viewer";
// enum UserRole {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const UserRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
const canEdit = (role) => {
    if (role == UserRole.Admin || role == UserRole.Editor) {
        return true;
    }
    else {
        return false;
    }
};
const isEditPermissable = canEdit(UserRole.Admin);
console.log(isEditPermissable);
//# sourceMappingURL=asconstInsteadOfEnam.js.map