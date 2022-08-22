let download_pdf_btn = document.getElementById('download_pdf');
download_pdf_btn.addEventListener('click', ()=>{
	// let file = fopen('1.pdf', 0);
	download_pdf_btn.href = '/download';
	download_pdf_btn.download = '1.pdf';
	download_pdf_btn.dispatchEvent(new MouseEvent('click'));
	// console.log();
});