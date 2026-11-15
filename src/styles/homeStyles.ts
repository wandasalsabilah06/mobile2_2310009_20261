import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FBF7F7",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#FBF7F7",
  },
  scrollContent: {
    padding: 20,
    gap: 16,
  },
  welcomeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: "#F3D5DA",
    shadowColor: "#2D0A12",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  statusBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginBottom: 10,
  },
  statusBadgeText: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#059669",
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2D0A12",
  },
  greetingEmail: {
    fontSize: 13.5,
    color: "#800020",
    fontWeight: "600",
    marginTop: 2,
  },
  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#F3D5DA",
    shadowColor: "#2D0A12",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 2,
  },
  menuHeader: {
    marginBottom: 18,
  },
  menuSectionTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#2D0A12",
  },
  menuSectionSubtitle: {
    fontSize: 12,
    color: "#6B5A5E",
    marginTop: 2,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    rowGap: 20,
  },
  menuItem: {
    width: "33.33%",
    alignItems: "center",
  },
  menuIconWrapper: {
    width: 58,
    height: 58,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  menuLabel: {
    fontSize: 11.5,
    fontWeight: "700",
    color: "#4A0D1A",
    textAlign: "center",
    marginTop: 7,
  },
  iconBgMaroon: {
    backgroundColor: "#FDF2F4",
    borderColor: "#F3D5DA",
  },
  iconBgGreen: {
    backgroundColor: "#ECFDF5",
    borderColor: "#D1FAE5",
  },
  iconBgAmber: {
    backgroundColor: "#FFFBEB",
    borderColor: "#FEF3C7",
  },
  iconBgCyan: {
    backgroundColor: "#ECFEFF",
    borderColor: "#CFFAFE",
  },
  iconBgViolet: {
    backgroundColor: "#F5F3FF",
    borderColor: "#EDE9FE",
  },
});
