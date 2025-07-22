export const categories = [
  {
    id: 1,
    name: 'HTML',
    slug: 'html',
    image: '/assets/html.jpg',
    description: 'Câu hỏi về HTML cơ bản'
  },
  {
    id: 2, 
    name: 'CSS', 
    slug: 'css',
    image: '/assets/css.jpg',
    description: 'Kiến thức về CSS'
  },
  {
    id: 3, 
    name: 'JavaScript', 
    slug: 'js',
    image: '/assets/js.jpg',
    description: 'JS từ cơ bản đến nâng cao'
  },
  {
    id: 4, 
    name: 'ReactJS', 
    slug: 'reactjs',
    image: '/assets/reactjs.jpg',
    description: 'Component, Hook, State...'
  },
];


const htmlQuestions = [
  {
    id: 1,
    category: 'html',
    question: 'Thẻ HTML nào dùng để tạo liên kết?',
    options: ['<a>', '<link>', '<href>', '<url>'],
    answer: '<a>',
  },
  {
    id: 2,
    category: 'html',
    question: 'Thẻ nào để chèn hình ảnh vào trang HTML?',
    options: ['<img>', '<image>', '<pic>', '<src>'],
    answer: '<img>',
  },
  {
    id: 3,
    category: 'html',
    question: 'Thuộc tính nào bắt buộc trong thẻ <img>?',
    options: ['alt', 'src', 'href', 'title'],
    answer: 'src',
  },
  {
    id: 4,
    category: 'html',
    question: 'Thẻ nào dùng để tạo danh sách không thứ tự?',
    options: ['<ul>', '<ol>', '<li>', '<dl>'],
    answer: '<ul>',
  },
  {
    id: 5,
    category: 'html',
    question: 'Thẻ nào dùng để tạo tiêu đề lớn nhất?',
    options: ['<title>', '<h6>', '<header>', '<h1>'],
    answer: '<h1>',
  },
  {
    id: 6,
    category: 'html',
    question: 'Thẻ nào dùng để tạo biểu mẫu trong HTML?',
    options: ['<form>', '<input>', '<fieldset>', '<div>'],
    answer: '<form>',
  },
  {
    id: 7,
    category: 'html',
    question: 'Thuộc tính nào tạo nút gửi trong form?',
    options: ['submit', 'type="submit"', 'action', 'button'],
    answer: 'type="submit"',
  },
  {
    id: 8,
    category: 'html',
    question: 'Thuộc tính "alt" trong thẻ <img> dùng để làm gì?',
    options: ['Tăng tốc độ tải ảnh', 'Thay thế ảnh nếu lỗi', 'Chèn CSS', 'Thêm liên kết'],
    answer: 'Thay thế ảnh nếu lỗi',
  },
  {
    id: 9,
    category: 'html',
    question: 'HTML là viết tắt của gì?',
    options: ['HyperText Markup Language', 'HighText Machine Language', 'Hyperlinks Text Management Language', 'None'],
    answer: 'HyperText Markup Language',
  },
  {
    id: 10,
    category: 'html',
    question: 'HTML có phải là ngôn ngữ lập trình không?',
    options: ['Có', 'Không', 'Một phần', 'Chỉ khi dùng với CSS'],
    answer: 'Không',
  },
  {
    id: 11,
    category: 'html',
    question: 'Thẻ nào để tạo bảng (table)?',
    options: ['<div>', '<table>', '<section>', '<grid>'],
    answer: '<table>',
  },
  {
    id: 12,
    category: 'html',
    question: 'Thẻ con của bảng là gì?',
    options: ['<tr>, <td>, <thead>', '<ul>, <li>', '<form>, <input>', '<div>, <span>'],
    answer: '<tr>, <td>, <thead>',
  },
  {
    id: 13,
    category: 'html',
    question: 'Cách comment trong HTML là?',
    options: ['// comment', '/* comment */', '<!-- comment -->', '# comment'],
    answer: '<!-- comment -->',
  },
  {
    id: 14,
    category: 'html',
    question: 'Thẻ nào để tạo đoạn văn bản?',
    options: ['<div>', '<p>', '<span>', '<section>'],
    answer: '<p>',
  },
  {
    id: 15,
    category: 'html',
    question: 'Thẻ <strong> khác gì với <b>?',
    options: ['Không khác gì', '<strong> có ý nghĩa ngữ nghĩa', '<b> có ý nghĩa ngữ nghĩa', 'Cả hai không dùng được'],
    answer: '<strong> có ý nghĩa ngữ nghĩa',
  },
  {
    id: 16,
    category: 'html',
    question: 'Thẻ nào để in nghiêng văn bản?',
    options: ['<i>', '<em>', 'Cả hai', 'Không thẻ nào'],
    answer: 'Cả hai',
  },
  {
    id: 17,
    category: 'html',
    question: 'Thẻ nào tạo danh sách có thứ tự?',
    options: ['<ul>', '<ol>', '<li>', '<list>'],
    answer: '<ol>',
  },
  {
    id: 18,
    category: 'html',
    question: 'HTML5 giới thiệu thẻ nào sau đây?',
    options: ['<article>', '<section>', '<header>', 'Tất cả'],
    answer: 'Tất cả',
  },
  {
    id: 19,
    category: 'html',
    question: 'Thẻ nào chứa thông tin metadata?',
    options: ['<meta>', '<head>', '<title>', '<body>'],
    answer: '<head>',
  },
  {
    id: 20,
    category: 'html',
    question: 'Thuộc tính target="_blank" có tác dụng gì?',
    options: ['Mở trong cửa sổ mới', 'Tải lại trang', 'Chặn popup', 'Ẩn liên kết'],
    answer: 'Mở trong cửa sổ mới',
  },
  {
    id: 21,
    category: 'html',
    question: 'Thẻ nào dùng để nhúng video?',
    options: ['<media>', '<video>', '<embed>', '<movie>'],
    answer: '<video>',
  },
  {
    id: 22,
    category: 'html',
    question: 'Thuộc tính nào để hiển thị điều khiển video?',
    options: ['autoplay', 'controls', 'loop', 'mute'],
    answer: 'controls',
  },
  {
    id: 23,
    category: 'html',
    question: 'Thẻ nào dùng để nhúng âm thanh?',
    options: ['<audio>', '<sound>', '<music>', '<embed>'],
    answer: '<audio>',
  },
  {
    id: 24,
    category: 'html',
    question: 'Thuộc tính nào bắt buộc để input không được để trống?',
    options: ['value', 'required', 'readonly', 'validate'],
    answer: 'required',
  },
  {
    id: 25,
    category: 'html',
    question: 'Cách gán class cho phần tử HTML?',
    options: ['.class="btn"', 'class="btn"', '#class="btn"', 'style-class="btn"'],
    answer: 'class="btn"',
  },
  {
    id: 26,
    category: 'html',
    question: 'ID trong HTML có thể lặp lại không?',
    options: ['Có', 'Không', 'Tùy trình duyệt', 'Nếu trong form thì được'],
    answer: 'Không',
  },
  {
    id: 27,
    category: 'html',
    question: 'Placeholder có chức năng gì?',
    options: ['Hiển thị văn bản mẫu', 'Thay đổi kiểu chữ', 'Ẩn dữ liệu', 'Gắn link'],
    answer: 'Hiển thị văn bản mẫu',
  },
  {
    id: 28,
    category: 'html',
    question: 'Thẻ <div> dùng để làm gì?',
    options: ['Hiển thị hình ảnh', 'Tạo vùng chứa', 'Tạo tiêu đề', 'Tạo bảng'],
    answer: 'Tạo vùng chứa',
  },
  {
    id: 29,
    category: 'html',
    question: 'Khác biệt giữa <span> và <div> là gì?',
    options: ['Không có khác biệt', '<div> là inline, <span> là block', '<span> là inline, <div> là block', 'Cả hai là inline'],
    answer: '<span> là inline, <div> là block',
  },
  {
    id: 30,
    category: 'html',
    question: 'Thẻ nào để tạo nút tương tác?',
    options: ['<input>', '<span>', '<button>', '<form>'],
    answer: '<button>',
  },
  {
    id: 31,
    category: 'html',
    question: 'Thẻ nào hiển thị định nghĩa từ khóa?',
    options: ['<dt>', '<dfn>', '<def>', '<desc>'],
    answer: '<dfn>',
  },
  {
    id: 32,
    category: 'html',
    question: 'Thẻ nào để tạo danh sách mô tả?',
    options: ['<dl>', '<ol>', '<ul>', '<list>'],
    answer: '<dl>',
  },
  {
    id: 33,
    category: 'html',
    question: 'Cách thêm favicon cho trang web?',
    options: ['<favicon>', '<icon>', '<link rel="icon">', '<meta favicon>'],
    answer: '<link rel="icon">',
  },
  {
    id: 34,
    category: 'html',
    question: 'Thẻ nào hiển thị đoạn mã lập trình?',
    options: ['<pre>', '<code>', '<script>', 'Cả hai <pre> và <code>'],
    answer: 'Cả hai <pre> và <code>',
  },
  {
    id: 35,
    category: 'html',
    question: 'Thẻ <iframe> dùng để làm gì?',
    options: ['Chèn video', 'Chèn website khác', 'Tạo layout', 'Làm thanh menu'],
    answer: 'Chèn website khác',
  },
  {
    id: 36,
    category: 'html',
    question: 'Khác biệt giữa radio và checkbox là gì?',
    options: ['Không có', 'Checkbox chọn 1, radio chọn nhiều', 'Radio chọn 1, checkbox chọn nhiều', 'Cả hai đều giống nhau'],
    answer: 'Radio chọn 1, checkbox chọn nhiều',
  },
  {
    id: 37,
    category: 'html',
    question: 'Thẻ <label> dùng để làm gì?',
    options: ['Hiển thị hình ảnh', 'Tạo văn bản', 'Gắn nhãn cho input', 'Tạo tiêu đề'],
    answer: 'Gắn nhãn cho input',
  },
  {
    id: 38,
    category: 'html',
    question: 'Thuộc tính value dùng cho thẻ nào?',
    options: ['<div>', '<p>', '<input>', '<span>'],
    answer: '<input>',
  },
  {
    id: 39,
    category: 'html',
    question: 'Khác biệt giữa name và id trong input?',
    options: ['Không khác biệt', 'id để gửi dữ liệu, name để định danh', 'name gửi dữ liệu, id định danh', 'Chỉ cần dùng id'],
    answer: 'name gửi dữ liệu, id định danh',
  },
  {
    id: 40,
    category: 'html',
    question: 'Thẻ nào để nhóm input trong form?',
    options: ['<div>', '<fieldset>', '<group>', '<section>'],
    answer: '<fieldset>',
  },
  {
    id: 41,
    category: 'html',
    question: 'Thẻ nào mô tả cho fieldset?',
    options: ['<legend>', '<caption>', '<title>', '<label>'],
    answer: '<legend>',
  },
  {
    id: 42,
    category: 'html',
    question: 'Lỗi phổ biến nhất với thẻ <a> là gì?',
    options: ['Không có href', 'Không có target', 'Không có class', 'Đặt trong <head>'],
    answer: 'Không có href',
  },
  {
    id: 43,
    category: 'html',
    question: 'Cách nhúng CSS ngoài vào HTML?',
    options: ['<script src="style.css">', '<style src="style.css">', '<link rel="stylesheet" href="style.css">', '<meta css="style.css">'],
    answer: '<link rel="stylesheet" href="style.css">',
  },
  {
    id: 44,
    category: 'html',
    question: 'HTML có phân biệt chữ hoa chữ thường không?',
    options: ['Có', 'Không', 'Tùy tag', 'Tùy trình duyệt'],
    answer: 'Không',
  },
  {
    id: 45,
    category: 'html',
    question: 'Ký hiệu để hiển thị ký tự đặc biệt như © là gì?',
    options: ['&copy;', '(c)', '©', '%copy%'],
    answer: '&copy;',
  },
  {
    id: 46,
    category: 'html',
    question: 'Làm thế nào để xuống dòng trong HTML?',
    options: ['<break>', '<br>', '<lb>', '<newline>'],
    answer: '<br>',
  },
  {
    id: 47,
    category: 'html',
    question: 'Thẻ meta charset="UTF-8" để làm gì?',
    options: ['Tăng tốc độ load', 'Hiển thị video', 'Thiết lập mã hóa ký tự', 'Ẩn nội dung'],
    answer: 'Thiết lập mã hóa ký tự',
  },
  {
    id: 48,
    category: 'html',
    question: 'Thuộc tính action trong form dùng để làm gì?',
    options: ['Tạo hiệu ứng', 'Xác định URL nhận dữ liệu', 'Ẩn dữ liệu', 'Làm mới form'],
    answer: 'Xác định URL nhận dữ liệu',
  },
  {
    id: 49,
    category: 'html',
    question: 'Phân biệt method="post" và method="get"?',
    options: ['post hiện trên URL, get thì không', 'get dùng trong API', 'post gửi ngầm, get hiện URL', 'post lưu trong cookie'],
    answer: 'post gửi ngầm, get hiện URL',
  },
  {
    id: 50,
    category: 'html',
    question: 'Thẻ meta viewport dùng để làm gì?',
    options: ['Tăng tốc độ', 'Tự động xoay màn hình', 'Hỗ trợ responsive', 'Ẩn thanh cuộn'],
    answer: 'Hỗ trợ responsive',
  },

];
const cssQuestions = [
  {
    id: 1,
    category: 'css',
    question: 'CSS là viết tắt của từ gì?',
    options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
    answer: 'Cascading Style Sheets',
  },
  {
    id: 2,
    category: 'css',
    question: 'Thẻ HTML nào dùng để liên kết CSS ngoài?',
    options: ['<style>', '<script>', '<link>', '<css>'],
    answer: '<link>',
  },
  {
    id: 3,
    category: 'css',
    question: 'Cách để thêm CSS nội tuyến?',
    options: ['<style src="style.css">', 'style="color:red;"', '<link href="style.css">', '<css inline>'],
    answer: 'style="color:red;"',
  },
  {
    id: 4,
    category: 'css',
    question: 'Thuộc tính nào dùng để thay đổi màu chữ?',
    options: ['font-color', 'color', 'text-color', 'foreground'],
    answer: 'color',
  },
  {
    id: 5,
    category: 'css',
    question: 'Thuộc tính nào để căn giữa nội dung theo chiều ngang?',
    options: ['margin: auto', 'text-align: center', 'align: center', 'center: true'],
    answer: 'margin: auto',
  },
  {
    id: 6,
    category: 'css',
    question: 'Đơn vị nào là tương đối trong CSS?',
    options: ['px', 'em', 'pt', 'cm'],
    answer: 'em',
  },
  {
    id: 7,
    category: 'css',
    question: 'Thuộc tính nào để thay đổi font chữ?',
    options: ['text-font', 'font-style', 'font-family', 'font-type'],
    answer: 'font-family',
  },
  {
    id: 8,
    category: 'css',
    question: 'Cách viết comment trong CSS là?',
    options: ['// ghi chú', '# ghi chú', '/* ghi chú */', '<!-- ghi chú -->'],
    answer: '/* ghi chú */',
  },
  {
    id: 9,
    category: 'css',
    question: 'Selector nào chọn tất cả phần tử?',
    options: ['#', '*', '.', 'all'],
    answer: '*',
  },
  {
    id: 10,
    category: 'css',
    question: 'Cách chọn phần tử có id là "main"?',
    options: ['.main', '#main', '*main', 'main'],
    answer: '#main',
  },
  {
    id: 11,
    category: 'css',
    question: 'Cách chọn tất cả thẻ `<p>` trong div?',
    options: ['div > p', 'div p', 'div+p', 'p > div'],
    answer: 'div p',
  },
  {
    id: 12,
    category: 'css',
    question: 'Pseudo-class nào dùng để hover?',
    options: [':hover', ':active', ':focus', ':visited'],
    answer: ':hover',
  },
  {
    id: 13,
    category: 'css',
    question: 'Thuộc tính nào thay đổi kích thước chữ?',
    options: ['font-weight', 'font-style', 'font-size', 'text-size'],
    answer: 'font-size',
  },
  {
    id: 14,
    category: 'css',
    question: 'Thuộc tính nào để đổi nền?',
    options: ['background-color', 'bg-color', 'color', 'fill'],
    answer: 'background-color',
  },
  {
    id: 15,
    category: 'css',
    question: 'Cách viết đúng để bo góc 10px?',
    options: ['corner-radius: 10px', 'border-radius: 10px', 'radius: 10px', 'border: round'],
    answer: 'border-radius: 10px',
  },
  {
    id: 16,
    category: 'css',
    question: 'Thuộc tính nào để thêm bóng cho box?',
    options: ['box-shadow', 'shadow-box', 'text-shadow', 'border-shadow'],
    answer: 'box-shadow',
  },
  {
    id: 17,
    category: 'css',
    question: 'Thuộc tính nào để canh chữ vào giữa?',
    options: ['text-align: center', 'align: center', 'center-text: true', 'text-center: true'],
    answer: 'text-align: center',
  },
  {
    id: 18,
    category: 'css',
    question: 'Thuộc tính position nào dùng để cố định trên đầu trang?',
    options: ['static', 'relative', 'fixed', 'absolute'],
    answer: 'fixed',
  },
  {
    id: 19,
    category: 'css',
    question: 'Cặp thuộc tính nào dùng để flex box?',
    options: ['display & position', 'flex & grid', 'display: flex', 'align & justify'],
    answer: 'display: flex',
  },
  {
    id: 20,
    category: 'css',
    question: 'Giá trị nào của display giúp ẩn phần tử?',
    options: ['none', 'hidden', 'invisible', 'block'],
    answer: 'none',
  },
  {
    id: 21,
    category: 'css',
    question: 'Thuộc tính nào để hiển thị đường viền?',
    options: ['border', 'outline', 'stroke', 'frame'],
    answer: 'border',
  },
  {
    id: 22,
    category: 'css',
    question: 'Cách để phần tử nằm chồng lên nhau?',
    options: ['z-index', 'layer', 'stack', 'index'],
    answer: 'z-index',
  },
  {
    id: 23,
    category: 'css',
    question: 'Thuộc tính nào để tạo hiệu ứng chuyển động mượt?',
    options: ['transition', 'animation', 'ease', 'move'],
    answer: 'transition',
  },
  {
    id: 24,
    category: 'css',
    question: 'CSS Grid dùng để làm gì?',
    options: ['Responsive table', 'Tạo bố cục lưới', 'Tạo biểu mẫu', 'Tăng hiệu năng'],
    answer: 'Tạo bố cục lưới',
  },
  {
    id: 25,
    category: 'css',
    question: 'Cách viết chọn phần tử đầu tiên trong danh sách?',
    options: ['ul:first', 'ul li:first-child', 'ul > li:1st', 'ul li:first'],
    answer: 'ul li:first-child',
  },
  {
    id: 26,
    category: 'css',
    question: 'Thuộc tính nào để thêm khoảng cách bên ngoài phần tử?',
    options: ['padding', 'spacing', 'margin', 'gap'],
    answer: 'margin',
  },
  {
    id: 27,
    category: 'css',
    question: 'Thuộc tính nào để căn chỉnh chiều cao dòng?',
    options: ['line-spacing', 'height', 'line-height', 'text-height'],
    answer: 'line-height',
  },
  {
    id: 28,
    category: 'css',
    question: 'Làm sao để gạch chân văn bản?',
    options: ['text-line: underline', 'text-decoration: underline', 'underline: true', 'decoration: line'],
    answer: 'text-decoration: underline',
  },
  {
    id: 29,
    category: 'css',
    question: 'Thuộc tính nào để chữ in đậm?',
    options: ['font-weight', 'text-bold', 'font-thickness', 'bold'],
    answer: 'font-weight',
  },
  {
    id: 30,
    category: 'css',
    question: 'Thuộc tính nào để giới hạn chiều rộng phần tử?',
    options: ['width-limit', 'max-width', 'min-width', 'limit-width'],
    answer: 'max-width',
  },
  {
    id: 31,
    category: 'css',
    question: 'Thuộc tính nào để làm tròn ảnh?',
    options: ['border: round', 'border-radius: 50%', 'radius: 100px', 'img-circle'],
    answer: 'border-radius: 50%',
  },
  {
    id: 32,
    category: 'css',
    question: 'Thuộc tính "overflow: hidden" dùng để làm gì?',
    options: ['Ẩn nội dung vượt khung', 'Ẩn toàn bộ phần tử', 'Ẩn ảnh nền', 'Ẩn padding'],
    answer: 'Ẩn nội dung vượt khung',
  },
  {
    id: 33,
    category: 'css',
    question: 'Chọn selector để chọn phần tử cuối cùng?',
    options: [':last', ':last-of-type', ':nth-last-child', ':last-child'],
    answer: ':last-child',
  },
  {
    id: 34,
    category: 'css',
    question: 'Cách tạo layout 2 cột bằng Flexbox?',
    options: ['display: inline', 'display: flex', 'float: left', 'margin: auto'],
    answer: 'display: flex',
  },
  {
    id: 35,
    category: 'css',
    question: 'Cách canh giữa cả chiều ngang và dọc trong Flexbox?',
    options: [
      'justify-content & align-content',
      'center-content: true',
      'justify-content: center; align-items: center;',
      'flex-center: true'
    ],
    answer: 'justify-content: center; align-items: center;',
  },
  {
    id: 36,
    category: 'css',
    question: 'Đơn vị % trong CSS phụ thuộc vào gì?',
    options: ['Giá trị tuyệt đối', 'Phần tử cha', 'Kích thước trình duyệt', 'Không xác định'],
    answer: 'Phần tử cha',
  },
  {
    id: 37,
    category: 'css',
    question: 'Thuộc tính nào để tạo animation?',
    options: ['motion', 'transition', 'animation', 'timeline'],
    answer: 'animation',
  },
  {
    id: 38,
    category: 'css',
    question: 'Cách chọn phần tử li thứ 3 trong danh sách?',
    options: ['li:nth-child(3)', 'li:eq(3)', 'li[3]', 'li:3rd'],
    answer: 'li:nth-child(3)',
  },
  {
    id: 39,
    category: 'css',
    question: 'Thuộc tính nào kiểm soát thứ tự chồng lớp?',
    options: ['layer-order', 'stack-index', 'z-index', 'position-index'],
    answer: 'z-index',
  },
  {
    id: 40,
    category: 'css',
    question: 'Thuộc tính nào dùng để căn lề bên trong?',
    options: ['padding', 'margin', 'spacing', 'inset'],
    answer: 'padding',
  },
  {
    id: 41,
    category: 'css',
    question: 'CSS nào làm phần tử có thể scroll?',
    options: ['overflow: scroll', 'scroll: true', 'scrollable: yes', 'auto-scroll: enable'],
    answer: 'overflow: scroll',
  },
  {
    id: 42,
    category: 'css',
    question: 'Cách để ẩn một phần tử nhưng vẫn giữ trong DOM?',
    options: ['display: none', 'opacity: 0', 'visibility: hidden', 'visibility: none'],
    answer: 'visibility: hidden',
  },
  {
    id: 43,
    category: 'css',
    question: 'Thuộc tính nào để canh chữ hai bên (justify)?',
    options: ['text-align: center', 'text-align: right', 'text-align: justify', 'justify-text: true'],
    answer: 'text-align: justify',
  },
  {
    id: 44,
    category: 'css',
    question: 'Cách chọn tất cả các phần tử có class là "box"?',
    options: ['#box', '*box', '.box', 'box'],
    answer: '.box',
  },
  {
    id: 45,
    category: 'css',
    question: 'Cách chọn thẻ `<p>` nằm trong `<div>` và có class "text"?',
    options: ['div p.text', 'div.text p', '.text p in div', 'p.text in div'],
    answer: 'div p.text',
  },
  {
    id: 46,
    category: 'css',
    question: 'Chọn giá trị đúng của thuộc tính position?',
    options: ['static', 'absolute', 'relative', 'Tất cả đáp án'],
    answer: 'Tất cả đáp án',
  },
  {
    id: 47,
    category: 'css',
    question: 'CSS nào dùng để đặt ảnh nền toàn màn hình?',
    options: [
      'background-size: cover;',
      'image-size: full;',
      'cover-background: true;',
      'background: stretch;'
    ],
    answer: 'background-size: cover;',
  },
  {
    id: 48,
    category: 'css',
    question: 'Media query dùng để làm gì?',
    options: ['Tối ưu JS', 'Tương tác với API', 'Thiết kế responsive', 'Tối ưu SEO'],
    answer: 'Thiết kế responsive',
  },
  {
    id: 49,
    category: 'css',
    question: 'CSS biến (custom property) bắt đầu bằng gì?',
    options: ['--', '$', '@', '%%'],
    answer: '--',
  },
  {
    id: 50,
    category: 'css',
    question: 'CSS có thể dùng cho animation không?',
    options: ['Không', 'Có', 'Chỉ khi dùng JS', 'Chỉ SVG'],
    answer: 'Có',
  }
];

const jsQuestions = [
  {
    id: 1,
    category: 'js',
    question: 'JavaScript là ngôn ngữ kiểu gì?',
    options: ['Static', 'Dynamic', 'Strongly Typed', 'Machine-level'],
    answer: 'Dynamic',
  },
  {
    id: 2,
    category: 'js',
    question: 'Câu lệnh nào để khai báo biến trong JavaScript?',
    options: ['var', 'let', 'const', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
  },
  {
    id: 3,
    category: 'js',
    question: 'Kết quả của `typeof null` là gì?',
    options: ['null', 'object', 'undefined', 'NaN'],
    answer: 'object',
  },
  {
    id: 4,
    category: 'js',
    question: 'Kết quả của `[] + []` là gì?',
    options: ['0', 'undefined', '""', 'NaN'],
    answer: '""',
  },
  {
    id: 5,
    category: 'js',
    question: 'Sự khác nhau chính giữa `==` và `===` là gì?',
    options: ['Không khác', '=== so sánh giá trị và kiểu', '== nhanh hơn', '=== không hỗ trợ object'],
    answer: '=== so sánh giá trị và kiểu',
  },
  {
    id: 6,
    category: 'js',
    question: '`NaN` là viết tắt của gì?',
    options: ['Not a Null', 'Not a Name', 'Not a Number', 'No assigned Number'],
    answer: 'Not a Number',
  },
  {
    id: 7,
    category: 'js',
    question: 'Hàm nào dùng để chuyển chuỗi sang số?',
    options: ['parseString()', 'String()', 'parseInt()', 'int()'],
    answer: 'parseInt()',
  },
  {
    id: 8,
    category: 'js',
    question: 'Cách nào tạo một hàm trong JavaScript?',
    options: ['function myFunc() {}', 'let myFunc = function() {}', 'const myFunc = () => {}', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
  },
  {
    id: 9,
    category: 'js',
    question: '`setTimeout()` dùng để làm gì?',
    options: ['Lặp lại liên tục', 'Chạy một lần sau khoảng thời gian', 'Chạy ngay lập tức', 'Gọi API'],
    answer: 'Chạy một lần sau khoảng thời gian',
  },
  {
    id: 10,
    category: 'js',
    question: 'Kết quả của `typeof undefined` là gì?',
    options: ['null', 'undefined', 'object', 'NaN'],
    answer: 'undefined',
  },
  {
    id: 11,
    category: 'js',
    question: 'Giá trị mặc định của biến chưa gán là gì?',
    options: ['0', 'null', 'undefined', 'NaN'],
    answer: 'undefined',
  },
  {
    id: 12,
    category: 'js',
    question: 'Toán tử `...` được gọi là gì?',
    options: ['Rest', 'Spread', 'Both', 'Dot operator'],
    answer: 'Both',
  },
  {
    id: 13,
    category: 'js',
    question: 'JSON là gì?',
    options: ['Một kiểu dữ liệu', 'Một định dạng dữ liệu', 'Một hàm', 'Một plugin'],
    answer: 'Một định dạng dữ liệu',
  },
  {
    id: 14,
    category: 'js',
    question: 'Cách parse JSON string thành object?',
    options: ['JSON.parse()', 'JSON.stringify()', 'JSON.decode()', 'JSON.object()'],
    answer: 'JSON.parse()',
  },
  {
    id: 15,
    category: 'js',
    question: 'Closure trong JavaScript là gì?',
    options: ['Hàm có thể gọi lại chính nó', 'Hàm nhớ scope nơi nó được tạo ra', 'Một class đặc biệt', 'Không có định nghĩa'],
    answer: 'Hàm nhớ scope nơi nó được tạo ra',
  },
  {
    id: 16,
    category: 'js',
    question: 'Callback function là gì?',
    options: ['Hàm được truyền vào hàm khác', 'Hàm trả về boolean', 'Hàm không có tên', 'Hàm không được gọi'],
    answer: 'Hàm được truyền vào hàm khác',
  },
  {
    id: 17,
    category: 'js',
    question: 'Promise dùng để làm gì?',
    options: ['Định nghĩa biến', 'Quản lý bất đồng bộ', 'Render UI', 'Tạo vòng lặp'],
    answer: 'Quản lý bất đồng bộ',
  },
  {
    id: 18,
    category: 'js',
    question: 'Async/Await giúp làm gì?',
    options: ['Viết code đồng bộ cho bất đồng bộ', 'Tăng tốc độ vòng lặp', 'Tạo closure', 'Tăng RAM'],
    answer: 'Viết code đồng bộ cho bất đồng bộ',
  },
  {
    id: 19,
    category: 'js',
    question: 'Toán tử nào dùng để kiểm tra null hoặc undefined?',
    options: ['??', '||', '&&', '!'],
    answer: '??',
  },
  {
    id: 20,
    category: 'js',
    question: 'Object nào đại diện cho trình duyệt?',
    options: ['browser', 'screen', 'window', 'document'],
    answer: 'window',
  },
  {
    id: 21,
    category: 'js',
    question: 'DOM là viết tắt của gì?',
    options: ['Data Object Model', 'Document Object Model', 'Data Oriented Method', 'None'],
    answer: 'Document Object Model',
  },
  {
    id: 22,
    category: 'js',
    question: 'Làm thế nào để chọn phần tử có id là "main"?',
    options: ['getElementById("main")', 'querySelector("#main")', 'getElement("main")', 'Cả A và B'],
    answer: 'Cả A và B',
  },
  {
    id: 23,
    category: 'js',
    question: 'Phương thức nào thêm phần tử HTML vào DOM?',
    options: ['appendChild()', 'insert()', 'addNode()', 'pushElement()'],
    answer: 'appendChild()',
  },
  {
    id: 24,
    category: 'js',
    question: 'Sự kiện nào xảy ra khi nhấn nút?',
    options: ['onpress', 'onclick', 'onmouseclick', 'onpush'],
    answer: 'onclick',
  },
  {
    id: 25,
    category: 'js',
    question: 'Phương thức `addEventListener()` có công dụng gì?',
    options: ['Thêm thẻ HTML', 'Thêm sự kiện cho phần tử', 'Tạo biến mới', 'Gửi API'],
    answer: 'Thêm sự kiện cho phần tử',
  },
  {
    id: 26,
    category: 'js',
    question: 'Cách kiểm tra mảng trong JavaScript?',
    options: ['Array.isArray()', 'isArray()', 'typeof === "array"', 'instanceof Array'],
    answer: 'Array.isArray()',
  },
  {
    id: 27,
    category: 'js',
    question: 'Câu nào đúng khi khai báo hằng số?',
    options: ['const x = 10;', 'let x = 10;', 'var x = 10;', 'Cả ba đều đúng'],
    answer: 'const x = 10;',
  },
  {
    id: 28,
    category: 'js',
    question: 'Arrow function KHÔNG có đặc điểm nào sau đây?',
    options: ['Ngắn gọn', 'Không có từ khóa "this"', 'Không tạo scope mới', 'Có hoisting'],
    answer: 'Có hoisting',
  },
  {
    id: 29,
    category: 'js',
    question: 'Hàm `map()` dùng để làm gì?',
    options: ['Tạo mảng mới từ mảng cũ', 'Lọc phần tử', 'Tính tổng', 'Kiểm tra điều kiện'],
    answer: 'Tạo mảng mới từ mảng cũ',
  },
  {
    id: 30,
    category: 'js',
    question: 'Kết quả của `[1,2,3].filter(x => x > 1)` là gì?',
    options: ['[1]', '[2,3]', '[1,2,3]', '[3]'],
    answer: '[2,3]',
  },
  {
    id: 31,
    category: 'js',
    question: 'Phương thức nào nối chuỗi?',
    options: ['join()', 'merge()', 'concat()', 'append()'],
    answer: 'concat()',
  },
  {
    id: 32,
    category: 'js',
    question: 'Toán tử `typeof` trả về gì nếu biến chưa được định nghĩa?',
    options: ['error', 'undefined', 'null', 'NaN'],
    answer: 'undefined',
  },
  {
    id: 33,
    category: 'js',
    question: 'Hàm `Math.floor(4.7)` trả về?',
    options: ['5', '4.7', '4', '0'],
    answer: '4',
  },
  {
    id: 34,
    category: 'js',
    question: 'Đâu là vòng lặp vô hạn?',
    options: ['while(true){}', 'for(;;){}', 'do{}while(true)', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
  },
  {
    id: 35,
    category: 'js',
    question: 'Kết quả `null == undefined` là gì?',
    options: ['true', 'false', 'null', 'error'],
    answer: 'true',
  },
  {
    id: 36,
    category: 'js',
    question: 'Template literals sử dụng ký tự nào?',
    options: ['""', "''", '``', '##'],
    answer: '``',
  },
  {
    id: 37,
    category: 'js',
    question: '`localStorage` lưu dữ liệu trong bao lâu?',
    options: ['1 ngày', 'Tùy trình duyệt', 'Vĩnh viễn đến khi xóa', 'Sau 1 lần reload'],
    answer: 'Vĩnh viễn đến khi xóa',
  },
  {
    id: 38,
    category: 'js',
    question: '`sessionStorage` khác `localStorage` như thế nào?',
    options: ['Lưu ngắn hạn', 'Lưu dài hạn', 'Chia sẻ giữa tab', 'Không hỗ trợ object'],
    answer: 'Lưu ngắn hạn',
  },
  {
    id: 39,
    category: 'js',
    question: 'Cách chuyển chuỗi sang số chính xác nhất?',
    options: ['Number("123")', 'parseInt("123")', '+("123")', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
  },
  {
    id: 40,
    category: 'js',
    question: 'Câu lệnh nào dừng vòng lặp?',
    options: ['break', 'stop', 'exit', 'return'],
    answer: 'break',
  },
  {
    id: 41,
    category: 'js',
    question: 'Phương thức nào dùng để xóa phần tử mảng cuối?',
    options: ['pop()', 'remove()', 'delete()', 'shift()'],
    answer: 'pop()',
  },
  {
    id: 42,
    category: 'js',
    question: '`console.log(0.1 + 0.2 === 0.3)` trả về gì?',
    options: ['true', 'false', 'undefined', 'error'],
    answer: 'false',
  },
  {
    id: 43,
    category: 'js',
    question: 'Cách sao chép object đúng?',
    options: ['Object.assign({}, obj)', '{...obj}', 'JSON.parse(JSON.stringify(obj))', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
  },
  {
    id: 44,
    category: 'js',
    question: 'Sự kiện `submit` xảy ra khi nào?',
    options: ['Bấm nút', 'Điền form', 'Gửi form', 'Focus form'],
    answer: 'Gửi form',
  },
  {
    id: 45,
    category: 'js',
    question: 'Hàm nào duyệt qua từng phần tử mảng mà không trả về mảng mới?',
    options: ['forEach()', 'map()', 'filter()', 'reduce()'],
    answer: 'forEach()',
  },
  {
    id: 46,
    category: 'js',
    question: 'Object nào chứa các thông tin đầu vào URL?',
    options: ['URLSearchParams', 'window.location', 'navigator', 'document'],
    answer: 'window.location',
  },
  {
    id: 47,
    category: 'js',
    question: 'Câu lệnh nào kiểm tra key có tồn tại trong object?',
    options: ['"key" in obj', 'obj.key !== undefined', 'obj.hasOwnProperty("key")', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
  },
  {
    id: 48,
    category: 'js',
    question: 'Đâu là cách tạo class trong ES6?',
    options: ['class A {}', 'function A(){}', 'let A = class {}', 'Tất cả đều đúng'],
    answer: 'Tất cả đều đúng',
  },
  {
    id: 49,
    category: 'js',
    question: '`this` trong arrow function tham chiếu tới?',
    options: ['Hàm hiện tại', 'Global object', 'Scope cha', 'undefined'],
    answer: 'Scope cha',
  },
  {
    id: 50,
    category: 'js',
    question: 'JavaScript chạy chủ yếu ở đâu?',
    options: ['Server', 'Client', 'Cả hai', 'Database'],
    answer: 'Cả hai',
  }

]
const reactjsQuestions = [
  {
    id: 1,
    category: 'reactjs',
    question: 'React là gì?',
    options: [
      'Một framework JavaScript',
      'Một thư viện JavaScript để xây dựng giao diện người dùng',
      'Ngôn ngữ lập trình',
      'Trình biên dịch JS'
    ],
    answer: 'Một thư viện JavaScript để xây dựng giao diện người dùng'
  },
  {
    id: 2,
    category: 'reactjs',
    question: 'Ai phát triển React?',
    options: ['Google', 'Microsoft', 'Facebook', 'Twitter'],
    answer: 'Facebook'
  },
  {
    id: 3,
    category: 'reactjs',
    question: 'Lệnh nào tạo một app React mới?',
    options: ['create-react-app my-app', 'react-create my-app', 'npm create react', 'init react-app'],
    answer: 'create-react-app my-app'
  },
  {
    id: 4,
    category: 'reactjs',
    question: 'JSX là gì?',
    options: [
      'Một ngôn ngữ lập trình mới',
      'Một extension của JavaScript cho phép viết HTML trong JS',
      'Một loại CSS',
      'Một database'
    ],
    answer: 'Một extension của JavaScript cho phép viết HTML trong JS'
  },
  {
    id: 5,
    category: 'reactjs',
    question: 'Hook nào dùng để quản lý state trong function component?',
    options: ['useState', 'useEffect', 'useRef', 'useContext'],
    answer: 'useState'
  },
  {
    id: 6,
    category: 'reactjs',
    question: 'useEffect dùng để làm gì?',
    options: [
      'Gọi API, chạy sau render',
      'Tạo component',
      'Khai báo biến',
      'Định nghĩa JSX'
    ],
    answer: 'Gọi API, chạy sau render'
  },
  {
    id: 7,
    category: 'reactjs',
    question: 'Virtual DOM là gì?',
    options: [
      'Một DOM chạy trên server',
      'Một bản sao của real DOM để tối ưu cập nhật',
      'DOM thật',
      'Không tồn tại'
    ],
    answer: 'Một bản sao của real DOM để tối ưu cập nhật'
  },
  {
    id: 8,
    category: 'reactjs',
    question: 'Cách truyền dữ liệu từ component cha xuống con?',
    options: ['Props', 'State', 'Context', 'Hooks'],
    answer: 'Props'
  },
  {
    id: 9,
    category: 'reactjs',
    question: 'State khác gì với Props?',
    options: [
      'Props có thể thay đổi được',
      'State truyền từ cha xuống',
      'State là internal, Props là external',
      'Props chỉ dùng trong class component'
    ],
    answer: 'State là internal, Props là external'
  },
  {
    id: 10,
    category: 'reactjs',
    question: 'Khi nào useEffect được chạy?',
    options: [
      'Sau mỗi lần render',
      'Chỉ 1 lần khi load',
      'Khi dependencies thay đổi',
      'Tất cả đều đúng tùy vào khai báo'
    ],
    answer: 'Tất cả đều đúng tùy vào khai báo'
  },
  {
    id: 11,
    category: 'reactjs',
    question: 'React component là gì?',
    options: [
      'Một phần tử HTML',
      'Một hàm hoặc class trả về JSX',
      'Một page trong website',
      'Một style CSS'
    ],
    answer: 'Một hàm hoặc class trả về JSX'
  },
  {
    id: 12,
    category: 'reactjs',
    question: 'Key trong React dùng để làm gì?',
    options: [
      'Định danh duy nhất cho phần tử khi render list',
      'Tạo animation',
      'Bảo mật dữ liệu',
      'Tăng tốc độ API'
    ],
    answer: 'Định danh duy nhất cho phần tử khi render list'
  },
  {
    id: 13,
    category: 'reactjs',
    question: 'Component bị re-render khi nào?',
    options: [
      'Khi state thay đổi',
      'Khi props thay đổi',
      'Khi parent re-render',
      'Tất cả đều đúng'
    ],
    answer: 'Tất cả đều đúng'
  },
  {
    id: 14,
    category: 'reactjs',
    question: 'useRef thường dùng để làm gì?',
    options: [
      'Lưu giá trị không làm re-render',
      'Tạo context',
      'Quản lý state',
      'Gọi API'
    ],
    answer: 'Lưu giá trị không làm re-render'
  },
  {
    id: 15,
    category: 'reactjs',
    question: 'useContext dùng để làm gì?',
    options: [
      'Chia sẻ state giữa các component',
      'Gọi API',
      'Tạo key',
      'Render HTML'
    ],
    answer: 'Chia sẻ state giữa các component'
  },
  {
    id: 16,
    category: 'reactjs',
    question: 'React Router dùng để làm gì?',
    options: [
      'Chia layout',
      'Tạo route (đường dẫn) cho các component',
      'Tạo state',
      'Tạo context'
    ],
    answer: 'Tạo route (đường dẫn) cho các component'
  },
  {
    id: 17,
    category: 'reactjs',
    question: 'Redux là gì?',
    options: [
      'Một thư viện quản lý state tập trung',
      'Một UI framework',
      'Một hook trong React',
      'Một trình biên dịch'
    ],
    answer: 'Một thư viện quản lý state tập trung'
  },
  {
    id: 18,
    category: 'reactjs',
    question: 'Điểm khác biệt giữa useReducer và useState?',
    options: [
      'useReducer phù hợp với logic phức tạp',
      'useState dùng cho logic đơn giản',
      'Cả 2 câu trên đúng',
      'Không có sự khác biệt'
    ],
    answer: 'Cả 2 câu trên đúng'
  },
  {
    id: 19,
    category: 'reactjs',
    question: 'Tại sao nên dùng useCallback?',
    options: [
      'Tối ưu performance tránh re-create function',
      'Tạo state mới',
      'Giảm độ trễ mạng',
      'Tăng RAM'
    ],
    answer: 'Tối ưu performance tránh re-create function'
  },
  {
    id: 20,
    category: 'reactjs',
    question: 'React có hỗ trợ SSR (Server Side Rendering) không?',
    options: ['Không', 'Chỉ hỗ trợ qua thư viện ngoài', 'Có qua Next.js', 'Chỉ hỗ trợ class component'],
    answer: 'Có qua Next.js'
  },

  {
    id: 21,
    category: 'reactjs',
    question: 'Component nào tự động re-render khi state thay đổi?',
    options: ['Functional component', 'Class component', 'Cả hai', 'Không có cái nào'],
    answer: 'Cả hai'
  },
  {
    id: 22,
    category: 'reactjs',
    question: 'Làm sao để tránh component con bị render lại không cần thiết?',
    options: ['Dùng React.memo', 'Dùng useEffect', 'Dùng useState', 'Không thể tránh'],
    answer: 'Dùng React.memo'
  },
  {
    id: 23,
    category: 'reactjs',
    question: 'Khi nào nên dùng useMemo?',
    options: [
      'Khi cần tính toán phức tạp tránh tính lại không cần thiết',
      'Khi tạo component',
      'Khi thay đổi DOM',
      'Không nên dùng'
    ],
    answer: 'Khi cần tính toán phức tạp tránh tính lại không cần thiết'
  },
  {
    id: 24,
    category: 'reactjs',
    question: 'Sự khác nhau giữa controlled và uncontrolled components là gì?',
    options: [
      'Controlled bị React quản lý state, uncontrolled thì không',
      'Controlled không dùng được với form',
      'Uncontrolled có props',
      'Không có sự khác nhau'
    ],
    answer: 'Controlled bị React quản lý state, uncontrolled thì không'
  },
  {
    id: 25,
    category: 'reactjs',
    question: 'Lifecycle method nào được gọi sau khi component mount (class)?',
    options: ['componentDidMount', 'componentWillMount', 'shouldComponentUpdate', 'render'],
    answer: 'componentDidMount'
  },
  {
    id: 26,
    category: 'reactjs',
    question: 'Trong function component, useEffect(() => {}, []) tương đương với?',
    options: ['componentDidMount', 'componentWillUnmount', 'componentDidUpdate', 'shouldComponentUpdate'],
    answer: 'componentDidMount'
  },
  {
    id: 27,
    category: 'reactjs',
    question: 'Context API giúp gì trong React?',
    options: [
      'Truyền dữ liệu qua nhiều cấp component mà không cần props',
      'Quản lý route',
      'Gọi API',
      'Tối ưu bundle'
    ],
    answer: 'Truyền dữ liệu qua nhiều cấp component mà không cần props'
  },
  {
    id: 28,
    category: 'reactjs',
    question: 'Fragment trong React dùng để làm gì?',
    options: [
      'Gom nhóm nhiều phần tử mà không sinh ra node HTML',
      'Tạo effect',
      'Truyền dữ liệu',
      'Tạo CSS'
    ],
    answer: 'Gom nhóm nhiều phần tử mà không sinh ra node HTML'
  },
  {
    id: 29,
    category: 'reactjs',
    question: 'Câu lệnh nào dùng để import useState?',
    options: [
      'import { useState } from "react"',
      'import useState from "react"',
      'require("useState")',
      'useState()'
    ],
    answer: 'import { useState } from "react"'
  },
  {
    id: 30,
    category: 'reactjs',
    question: 'Khi gọi setState liên tục, React có batch update không?',
    options: ['Có', 'Không', 'Tùy component', 'Chỉ trong class'],
    answer: 'Có'
  },
  {
    id: 31,
    category: 'reactjs',
    question: 'Hàm setState có đồng bộ không?',
    options: ['Không', 'Có', 'Tùy trình duyệt', 'Tùy hook'],
    answer: 'Không'
  },
  {
    id: 32,
    category: 'reactjs',
    question: 'State trong React có bất biến (immutable) không?',
    options: ['Có', 'Không', 'Tùy cách khai báo', 'Chỉ class mới có'],
    answer: 'Có'
  },
  {
    id: 33,
    category: 'reactjs',
    question: 'Câu nào đúng về component class?',
    options: [
      'Phải kế thừa React.Component',
      'Không thể có state',
      'Không dùng được props',
      'Luôn chạy chậm hơn function'
    ],
    answer: 'Phải kế thừa React.Component'
  },
  {
    id: 34,
    category: 'reactjs',
    question: 'Câu lệnh dùng để điều hướng trong React Router v6?',
    options: ['useNavigate()', 'useRouter()', 'useRoute()', 'navigateTo()'],
    answer: 'useNavigate()'
  },
  {
    id: 35,
    category: 'reactjs',
    question: 'Làm sao để render 1 list trong React?',
    options: ['map()', 'forEach()', 'for', 'while'],
    answer: 'map()'
  },
  {
    id: 36,
    category: 'reactjs',
    question: 'Khi dùng map để render list, cần truyền gì cho mỗi item?',
    options: ['key', 'value', 'id', 'index'],
    answer: 'key'
  },
  {
    id: 37,
    category: 'reactjs',
    question: 'Tại sao không nên dùng index làm key?',
    options: [
      'Gây lỗi khi re-render list động',
      'React không hiểu',
      'Nó bị lỗi hook',
      'Không liên quan'
    ],
    answer: 'Gây lỗi khi re-render list động'
  },
  {
    id: 38,
    category: 'reactjs',
    question: 'Khi component bị unmount, làm sao clear effect?',
    options: ['Return cleanup trong useEffect', 'Dùng useMemo', 'Dùng props', 'Không cần thiết'],
    answer: 'Return cleanup trong useEffect'
  },
  {
    id: 39,
    category: 'reactjs',
    question: 'Hàm cleanup trong useEffect dùng để làm gì?',
    options: [
      'Clear timeout, interval, unsubscribe,...',
      'Gọi API mới',
      'Render lại',
      'Cập nhật DOM'
    ],
    answer: 'Clear timeout, interval, unsubscribe,...'
  },
  {
    id: 40,
    category: 'reactjs',
    question: 'React có bắt buộc dùng Babel không?',
    options: ['Không', 'Có', 'Chỉ dùng cho class component', 'Chỉ dùng với Webpack'],
    answer: 'Không'
  },
  {
    id: 41,
    category: 'reactjs',
    question: 'React có hỗ trợ TypeScript không?',
    options: ['Có', 'Không', 'Chỉ qua plugin', 'Chỉ với class'],
    answer: 'Có'
  },
  {
    id: 42,
    category: 'reactjs',
    question: 'Đâu là cách khai báo component hợp lệ?',
    options: [
      'const A = () => <div>Hello</div>',
      'function A() { return <div>Hello</div> }',
      'class A extends React.Component { render() { return <div>Hello</div> } }',
      'Tất cả đều đúng'
    ],
    answer: 'Tất cả đều đúng'
  },
  {
    id: 43,
    category: 'reactjs',
    question: 'Component nào sẽ không render lại nếu props không đổi khi dùng React.memo?',
    options: ['Component được bọc bằng React.memo', 'Tất cả component', 'Component cha', 'None'],
    answer: 'Component được bọc bằng React.memo'
  },
  {
    id: 44,
    category: 'reactjs',
    question: 'React.lazy dùng để làm gì?',
    options: [
      'Tải component theo cách dynamic import (lazy load)',
      'Tạo props',
      'Delay API',
      'Giảm bộ nhớ'
    ],
    answer: 'Tải component theo cách dynamic import (lazy load)'
  },
  {
    id: 45,
    category: 'reactjs',
    question: 'useTransition dùng để làm gì?',
    options: [
      'Tối ưu UI khi thực hiện cập nhật lớn (React 18)',
      'Tạo animation',
      'Chuyển route',
      'Không có công dụng'
    ],
    answer: 'Tối ưu UI khi thực hiện cập nhật lớn (React 18)'
  },
  {
    id: 46,
    category: 'reactjs',
    question: 'Concurrent Mode là gì?',
    options: [
      'Chế độ cho phép React xử lý công việc không đồng bộ tốt hơn',
      'Một mode của CSS',
      'Cách gọi API song song',
      'Không tồn tại'
    ],
    answer: 'Chế độ cho phép React xử lý công việc không đồng bộ tốt hơn'
  },
  {
    id: 47,
    category: 'reactjs',
    question: 'StrictMode trong React có tác dụng gì?',
    options: [
      'Phát hiện bug tiềm ẩn trong development',
      'Tối ưu hiệu năng',
      'Tăng tốc độ',
      'Tạo context'
    ],
    answer: 'Phát hiện bug tiềm ẩn trong development'
  },
  {
    id: 48,
    category: 'reactjs',
    question: 'useId hook dùng để làm gì?',
    options: [
      'Tạo id duy nhất trong form',
      'Tạo state',
      'Lưu userId',
      'Gọi API'
    ],
    answer: 'Tạo id duy nhất trong form'
  },
  {
    id: 49,
    category: 'reactjs',
    question: 'React 18 giới thiệu thêm gì?',
    options: [
      'useTransition, useId, automatic batching',
      'Redux mới',
      'Router 18',
      'Context mới'
    ],
    answer: 'useTransition, useId, automatic batching'
  },
  {
    id: 50,
    category: 'reactjs',
    question: 'Tại sao nên học React?',
    options: [
      'Nhu cầu cao, dễ dùng, cộng đồng lớn',
      'Không nên',
      'Chỉ dùng được backend',
      'Chỉ hỗ trợ class'
    ],
    answer: 'Nhu cầu cao, dễ dùng, cộng đồng lớn'
  }


]

export const quizData = [
  ...htmlQuestions,
  ...cssQuestions,
  ...jsQuestions,
  ...reactjsQuestions
]
