import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log('🚀 PDF 생성을 시작합니다...');
  console.log('⚠️  개발 서버가 실행 중인지 확인하세요! (npm run dev)');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 개발 서버로 접속 (기본 포트 5173)
  const url = 'http://localhost:5173';
  console.log('📄 페이지 로드 중:', url);

  try {
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // React가 렌더링될 때까지 기다림
    console.log('⏳ React 렌더링 대기 중...');
    await page.waitForSelector('h1', { timeout: 10000 });

    // 추가 대기 (Promise 사용)
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('📸 PDF 생성 중...');

  // PDF 생성
  const pdfPath = join(__dirname, '../portfolio.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0mm',
      right: '0mm',
      bottom: '0mm',
      left: '0mm',
    },
  });

    await browser.close();

    console.log('✅ PDF 생성 완료!');
    console.log('📁 저장 위치:', pdfPath);
    process.exit(0);
  } catch (error) {
    await browser.close();
    throw error;
  }
}

generatePDF().catch((err) => {
  console.error('❌ 오류 발생:', err);
  process.exit(1);
});
