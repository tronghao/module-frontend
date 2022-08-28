# Pagination
**Import**
import UsePagination from ....
const {} = UsePagination();
**How to use:**
    <Pagination
        :total="paginationInfo.total"
        :page-size="paginationInfo.perPage"
        :current-page="paginationInfo.currentPage"
        :pagerCount="7"
        @change-page="changePage"
    />
