export function addView() {
    fetch('http://192.168.109.117:3050/add/', {
      method: 'POST',
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
  