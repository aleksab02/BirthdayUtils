import Group from "@command/Group";

export const Basic = new Group({ name: "Basic", description: "" });
export const Fun = new Group({ name: "Special", description: "" });
export const OwnerOnly = new Group({ name: "Owner Only", description: "", ownerOnly: true });