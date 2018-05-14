async function fetchData({booksState:{page , pagesize , sortby , sortdirection , keyword}}){
    const {results,count} = await fetch(
            `http://127.0.0.1:8080/api/books?page=${page}&pagesize=${pagesize}&sortby=${sortby}&sortdirection=${sortdirection}&keyword=${keyword}`
        ).then(data=>data.json());
    return {results , count};
}

export default{
    async booksinit({commit , state}){
        //带着当前的分页信息、排序信息、关键词信息去拉取数据
        const {results , count} = await fetchData(state);
        commit("changeBooksResults" , {results});
        commit("changeBooksCount" , {count});
    },
    async changePage({commit , state},{page}){
        commit("changePage",{page})
        const {results , count} = await fetchData(state);
        commit("changeBooksResults" , {results});
        commit("changeBooksCount" , {count});
    },
    async changePagesize({commit , state},{pagesize}){
        commit("changePagesize",{pagesize})
        const {results , count} = await fetchData(state);
        commit("changeBooksResults" , {results});
        commit("changeBooksCount" , {count});
    },
}