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
        dengerType: ['고소'],
        content: '상부 방음판 교체',
        company: '(주)지에스아이엘',
        workDate: '2021-05-06',
        name: '이상범',
        writeDate: '2021-05-06',
        status: '제출 승인'
    },
    {
        no: '2',
        dengerType: ['고소','굴착/가설'],
        content: '지하 1층 굴착 작업',
        company: '(주)건창',
        workDate: '2021-05-06',
        name: '정대현',
        writeDate: '2021-05-06',
        status: '제출 승인'
    }
]