import { Box, Heading, UnorderedList, ListItem} from "@chakra-ui/react";
import Link from "next/link";

const list = [{ title: "Blog1", path: 1 }, { title :"Blog2", path:2}, { title :"Blog3", path:3}];
const Blog = () => {
  const renderListItem = (
    listItem
    )=>{
    return (
      <Link href={`/blog/${listItem.path}`} passHref>
        <ListItem>{listItem.title}</ListItem>
      </Link>
    );
  };
  return (
    <Box>
      <Heading>Blog</Heading>
      <UnorderedList>
        {list.map(renderListItem)}
      </UnorderedList>
    </Box>
  );
};

export default Blog;
