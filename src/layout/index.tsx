import Head from "next/head";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Box, Breadcrumb, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { WithChildren } from "../../@types/with-children";

import { useBreadcrumb } from "../contexts/BreadcrumbProvider";
import useUser from "../hooks/useUser";
import Header from "./Header";
import Sidebar from "./Sidebar";

export type Navigation = "drawer" | "sidebar";
interface IVariant {
  navigation: Navigation;
  navigationButton: boolean;
}

const smVariant: IVariant = {
  navigation: "drawer",
  navigationButton: true,
};

const mdVariant: IVariant = {
  navigation: "sidebar",
  navigationButton: false,
};

interface Props {
  pageTitle: string;
}

const Layout = ({ children, pageTitle }: WithChildren & Props) => {
  const { breadcrumbs } = useBreadcrumb();

  const { user } = useUser({
    redirectTo: "/login",
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  if (!user || user.isLoggedIn === false) return <p>Redirecionando...</p>;
  else
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Sidebar
          navVariant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={(!variants?.navigationButton && 250) as number}>
          {variants?.navigationButton && 250 && (
            <Header
              showSidebarButton={variants?.navigationButton}
              onShowSidebar={toggleSidebar}
            />
          )}

          <Box p={5}>
            <Breadcrumb
              fontWeight="medium"
              fontSize="md"
              spacing="0px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              {breadcrumbs}
            </Breadcrumb>

            <Divider my={5} />

            {children}
          </Box>
        </Box>
      </>
    );
};

export default Layout;
