"use strict";
//set of fixed string leteral ek jaygay rakhe
Object.defineProperty(exports, "__esModule", { value: true });
// type userRole = "Admin" | "Editor" | "Viewer";
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
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
//# sourceMappingURL=enum.js.map