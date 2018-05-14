export default{
    changePage(state , action){
        state.booksState.page= action.page;
    },
    changePagesize(state , action){
        state.booksState.pagesize= action.pagesize;
    },
    changeBooksResults(state , action){
        state.booksState.results = action.results;
    },
    changeBooksCount(state , action){
        state.booksState.count = action.count;
    }
}