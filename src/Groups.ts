import Group from "@command/Group";

export const Basic = new Group({ name: "Basic", description: "" });
export const Fun = new Group({ name: "Special", description: "" });
export const Admin = new Group({ name: "Admin", description: "", guildOnly: true, adminOnly: true });
export const OwnerOnly = new Group({ name: "Owner Only", description: "", ownerOnly: true });