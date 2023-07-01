import { Document } from 'langchain/document';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

const pdfLoader = async (fileName: string): Promise<Document<Record<string, any>>[]> => {
  const loader = new PDFLoader(fileName);

  console.log(`${fileName} 을 읽어옵니다.`);
  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000, // 1000자 단위로 chunk 지정
    chunkOverlap: 1, // 겹치지 않도록
  });

  console.log(`총 ${docs.length}개의 문서를 가지고 있습니다.`);

  for (const doc of docs) {
    console.log(`문서에 ${doc.pageContent.length}개의 단어를 가지고 있습니다.`);

    const docOutput = await splitter.splitDocuments([new Document({ pageContent: doc.pageContent })]);

    console.log(`${docOutput.length} 개의 document 로 생성합니다.`);
  }

  return docs;
};

export default pdfLoader;
