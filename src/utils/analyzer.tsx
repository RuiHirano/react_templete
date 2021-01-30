import { Document } from "../types"

// 分析するコンポーネント：誰でも作成可能
export interface AnalyzeItemInterface {
    analyze(document: Document): ChartData
}

export class AnalyzeItem1 implements AnalyzeItemInterface {
    constructor() {
    }

    analyze(document: Document) {

        return [{ title: "こと数", value: "20" }, { title: "ページ数", value: "10" }]
    }

}

// 分析する主体
export type AnalyzedData = ChartData[]

export class Analyzer {
    document: Document
    items: AnalyzeItemInterface[]
    analyzedData: AnalyzedData
    constructor(document: Document, items: AnalyzeItemInterface[]) {
        this.document = document
        this.items = items
        this.analyzedData = []
    }

    analyze() {
        this.items.forEach((item) => {
            const data = item.analyze(this.document)
            this.analyzedData.push(data)
        })
        return this.analyzedData
    }
}

// chartData
export type ChartData = CardData[] | PieData | BarData

interface CardData {
    title: string,
    value: string,
}

interface PieData {
    title: string,
    data: { label: string, value: number }[]
}

interface BarData {
    title: string,
    data: { label: string, value: number }[]
}
