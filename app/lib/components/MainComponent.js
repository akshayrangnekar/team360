import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { Header, Icon, SideMenu } from "react-native-elements";

const { width, height } = Dimensions.get("window");
const isLargeScreen = width > 768; // Example breakpoint for web/large screens
const isLandscape = width > height;

const MainComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderSidebar = () => (
    <SideMenu isOpen={menuOpen} onChange={(isOpen) => setMenuOpen(isOpen)}>
      {/* Add your sidebar content here */}
      <Text>Dummy Sidebar Content</Text>
    </SideMenu>
  );

  const renderHeader = () => (
    <Header
      leftComponent={
        (!isLargeScreen || (isLandscape && !isLargeScreen)) && (
          <Icon name="menu" onPress={() => setMenuOpen(!menuOpen)} />
        )
      }
      centerComponent={{ text: "Dummy Header Text", style: { color: "#fff" } }}
      // Add other header components if necessary
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {renderHeader()}
      {isLargeScreen && renderSidebar()}
      {!isLargeScreen && menuOpen && (
        <View
          style={{
            flex: 1,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {renderSidebar()}
        </View>
      )}
      <View style={{ flex: 1 }}>{/* Main content of the app goes here */}</View>
    </View>
  );
};

export default MainComponent;
