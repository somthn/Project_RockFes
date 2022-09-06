function paging(total, bottomSize, listSize, cursor){
    let totalPageSize = Math.ceil(total/listSize) //한 화면에 보여줄 개수에서 구한 하단 총 개수

    let totalBottomNumber = cursor - cursor % cursor % bottomSize + 1; //하단 최초 숫자
    let lastBottomNumber = cursor - cursor % bottomSize + bottomSize; //하단 마지막 숫자

    if(lastBottomNumber > totalPageSize) lastBottomNumber = totalPageSize

    return {
        firstBottomNumber,
        lastBottomNumber,
        totalPageSize,
        total,
        bottomSize,
        listSize,
        cursor
    }
}

//n개의 데이터, 하단에는 5개씩, 1개 화면에는 10개, 지금 나의 페이지는 1
let info = paging(20,5,10,1)

//실제 출력하는 방법
for(let i = info.firstBottomNumber; i <= info.lastBottomNumber; i++){
    i == info.cursor ? console.log(`<span>cur : ${i} </span>`) : console.log(`<span>cur : ${i} </span>`)
}

//https://lts0606.tistory.com/477