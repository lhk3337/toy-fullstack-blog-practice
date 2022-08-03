import React from "react";
import styled from "styled-components";
import qs from "qs";
import Button from "components/common/Button";

const StyledPagination = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 3rem; */
  padding-bottom: 3rem;
`;
const PageNumber = styled.div``;
const buildLink = ({ username, tag, page }) => {
  const query = qs.stringify({ tag, page });
  return username ? `/@${username}?${query}` : `/?${query}`;
};
const Pagination = ({ page, lastPage, username, tag }) => {
  return (
    <StyledPagination>
      <Button
        disabled={page === 0 || page === 1}
        to={page === 0 || page === 1 ? undefined : buildLink({ username, tag, page: page - 1 })}
      >
        이전
      </Button>
      <PageNumber>{page === 0 ? "" : page}</PageNumber>
      <Button
        disabled={page === lastPage}
        to={page === lastPage ? undefined : buildLink({ username, tag, page: page + 1 })}
      >
        다음
      </Button>
    </StyledPagination>
  );
};

export default Pagination;
