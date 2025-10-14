let roles: { name: string; filled?: boolean }[] = [];

const roleRepository = {
  getAll() {
    return roles;
  },
  add(role: { name: string; filled?: boolean }) {
    roles.push(role);
  },
  isRoleFilled(name: string) {
    return roles.some((r) => r.name === name && r.filled);
  },
};

export default roleRepository;
