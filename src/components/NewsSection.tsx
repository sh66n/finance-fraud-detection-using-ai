import React, { useEffect, useRef } from "react";

const FeatureSection: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listElement = listRef.current;
    if (!listElement) return;

    const scrollHeight = listElement.scrollHeight;
    const clientHeight = listElement.clientHeight;

    let start = 0;

    const scrollInterval = setInterval(() => {
      if (listElement) {
        listElement.scrollTop = start;
        start += 1; // Adjust speed here
        if (start > scrollHeight - clientHeight) {
          start = 0; // Reset to top when scrolled to the bottom
        }
      }
    }, 50); // Adjust interval here for smoother scrolling

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div style={styles.featureSection}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        {/* Scrollable List */}
        <div style={styles.scrollableList} ref={listRef}>
          <ul style={styles.list}>
            <li style={styles.listItem}>Manage your invoices with ease</li>
            <li style={styles.listItem}>Track expenses and revenues</li>
            <li style={styles.listItem}>Generate financial reports</li>
            <li style={styles.listItem}>Secure cloud-based storage</li>
            <li style={styles.listItem}>Multi-user support with roles</li>
            <li style={styles.listItem}>Integration with banking systems</li>
            <li style={styles.listItem}>Real-time notifications</li>
            <li style={styles.listItem}>Manage your invoices with ease</li>
            <li style={styles.listItem}>Track expenses and revenues</li>
            <li style={styles.listItem}>Generate financial reports</li>
            <li style={styles.listItem}>Secure cloud-based storage</li>
            <li style={styles.listItem}>Multi-user support with roles</li>
            <li style={styles.listItem}>Integration with banking systems</li>
            <li style={styles.listItem}>Real-time notifications</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <img
          src="https://senseware.co.in/ibjarates/images/banners/RBI-notification-image.png"
          alt="RBI Notification"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  featureSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "7rem",
    gap: "3rem",
    backgroundColor: "white",
    height: "70vh",
  },
  leftSection: {
    flex: "2 1 auto",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "3rem",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
    height: "100%",
    border: "2px solid #F0F0F0",
  },
  scrollableList: {
    flexGrow: 1,
    backgroundColor: "white",
    borderRadius: "2rem",
    overflowY: "hidden", // Hide scrollbar
    height: "100%",
    position: "relative",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: "0.75rem 1rem",
    borderBottom: "1px solid #E2E8F0",
    fontSize: "1.7rem",
    color: "#2d3748",
  },
  rightSection: {
    flex: "0 0 30%",
    borderRadius: "3rem",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "1rem",
    objectFit: "cover",
  },
};

export default FeatureSection;
