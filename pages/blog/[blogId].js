import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

const BlogDetail = () => {
    const router=useRouter();

    const blogId=router.query.blogId;
  return <Box>Blog No: {blogId}</Box>;
};
export default BlogDetail;
