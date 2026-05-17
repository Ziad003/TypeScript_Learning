//set of fixed string leteral ek jaygay rakhe

// type userRole = "Admin" | "Editor" | "Viewer";

// enum UserRole {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }
const UserRole ={
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "Viewer",
} as const;

const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {
  if (role == UserRole.Admin || role == UserRole.Editor) {
    return true;
  } else {
    return false;
  }
};

const isEditPermissable = canEdit(UserRole.Admin);
console.log(isEditPermissable);