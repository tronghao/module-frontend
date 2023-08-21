import { reactive } from 'vue';

export default function () {
    const paginationInfo = reactive({
        total: 0,
        currentPage: 1,
        itemStart: 0,
        itemEnd: 0,
        perPage: 10,
    });

    /**
     * changePage handle change page
     * @author HaoDT
     */
    const changePage = page => {
       console.log(page); 
    };

    return { paginationInfo, changePage };
}