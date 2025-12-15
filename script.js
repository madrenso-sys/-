// 파일 이름 형식: 'random (1).png' 형식
// 폴더 이름: 'new images'
const imageList = [];
for (let i = 1; i <= 49; i++) {
    // 폴더 이름과 파일 이름 형식을 모두 적용하여 경로 생성
    imageList.push(`new images/random (${i}).png`);
}

// 기본 이미지 경로 설정
const defaultImagePath = 'new images/default.png'; 

// Roll 버튼 클릭 이벤트 리스너
document.querySelectorAll('.roll-button').forEach(button => {
    button.addEventListener('click', function() {
        const itemIndex = this.getAttribute('data-index'); 
        const targetImage = document.getElementById(`image-${itemIndex}`);

        const randomIndex = Math.floor(Math.random() * imageList.length);
        const randomImagePath = imageList[randomIndex];

        targetImage.src = randomImagePath;
    });
});

// === 초기화 버튼 기능 추가 ===
document.getElementById('reset-button').addEventListener('click', function() {
    // 1번, 2번, 3번 이미지 칸을 모두 defaultImagePath로 되돌립니다.
    document.getElementById('image-1').src = defaultImagePath;
    document.getElementById('image-2').src = defaultImagePath;
    document.getElementById('image-3').src = defaultImagePath;
    
    // (선택 사항: 초기화 시 버튼 스타일 등을 변경할 수 있습니다.)
    console.log("모든 이미지가 초기화되었습니다.");
});
