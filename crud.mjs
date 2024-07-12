export function addView() {
    fetch('https://9f22-102-107-43-56.ngrok-free.app/add/', {
      method: 'post',
         
 
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
  
