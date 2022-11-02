export interface PtwList {
    no: number;
    dangerType: string | object;
    content: string,
    company: string,
    workDate: string,
    name: string,
    writeDate: string,
    status: string
}

export const ptwList = [
    {
        no: '1',
        confirm: '승인',
        subject: '위험공종 안전 작업허가서(PTW)',
        company: '(주)지에스아이엘',
        name: '이상범',
        date: '2022-05-05 09:00',
        status : '진행중'
    },
    {
        no: '2',
        confirm: '승인',
        subject: '위험공종 안전 작업허가서(PTW)',
        company: '(주)건창',
        name: '이건창',
        date: '2022-05-05 09:00',
        status : '진행중'
    }
]