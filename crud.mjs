export function addView() {
    fetch('https://0689-102-109-27-105.ngrok-free.app/add/', {
      method: 'post',
         //mode: 'no-cors'
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(responseData => {
      console.log('تم تحديث عدد المشاهدات:', responseData); // تصحيح الطباعة
      // يمكنك إدراج أي عمليات إضافية تحتاجها هنا
    })
    .catch(error => {
      console.error('حدث خطأ في تحديث عدد المشاهدات:', error); // تصحيح الطباعة
    });
  }
  
