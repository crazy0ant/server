class DrawingBoard{
    constructor() {
        this.nowPage = 1;
        this.totalPage = 1;
        this.pages = {};
        this.isShow = false;
    }
    addLine(pageNum,lineObj){
        if(this.pages[pageNum]){
            this.pages[pageNum].push(lineObj);
        }else{
            const page = [];
            page.push(lineObj);
            this.pages[pageNum] = page;
        }
    }
    cleanPage(pageNum){
        this.pages[pageNum] = [];
    }
    toPage(pageNum){
        if(pageNum<0){
            pageNum = 1;
        }
        if(pageNum>this.totalPage){
            pageNum = this.totalPage;
        }
        this.nowPage = pageNum;
        return pageNum;
    }
    addPage(){
        this.totalPage = this.totalPage+1;
        this.nowPage = this.totalPage;
    }
    setShow(isShow){
        this.isShow = isShow;
    }

}
module.exports = DrawingBoard;
