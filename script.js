const notifications=[{
    name:"Mark Webber",
    action: "reacted to your recent post",
    post:"My first tournament today!",
    time:"1m ago",
    img: "/notifications-page-main/assets/images/avatar-mark-webber.webp",
    unread:true 
},
{
    name: "Angela Gray",
    action: "followed you",
    time: "5m ago",
    img: "/notifications-page-main/assets/images/avatar-angela-gray.webp",
    unread: true
  },
  {
    name: "Jacob Thompson",
    action: "has joined your group",
    post: "Chess Club",
    time: "1 day ago",
    img: "/notifications-page-main/assets/images/avatar-jacob-thompson.webp",
    unread: true
  },
  {
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    time: "5 days ago",
    img: "/notifications-page-main/assets/images/avatar-rizky-hasanuddin.webp",
    message: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    unread: false
  },
  {
  name: "Kimberly Smith",
  action: "commented on your picture",
  time: "1 week ago",
  img: "/notifications-page-main/assets/images/avatar-kimberly-smith.webp",
  commentImg: "/notifications-page-main/assets/images/image-chess.webp",  // 👈 Add this
  unread: false
  },
  {
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    post: "5 end–game strategies to increase your win rate",
    time: "2 weeks ago",
    img: "/notifications-page-main/assets/images/avatar-nathan-peterson.webp",
    unread: false
  },
  {
    name: "Anna Kim",
    action: "left the group",
    post: "Chess Club",
    time: "2 weeks ago",
    img: "/notifications-page-main/assets/images/avatar-anna-kim.webp",
    unread: false
  }
]
const list=document.getElementById("notificationsList")
const notifCount=document.getElementById("notif-count")
const markReadBtn=document.getElementById("mark-read-btn")

function renderNotifications() {
    list.innerHTML="";
    let unreadCount=0;
    notifications.forEach((n, index) => {
    if (n.unread) unreadCount++;
    const li=document.createElement("li");
    li.classList.add("notification")
    if (n.unread) li.classList.add("unread");
    
   li.innerHTML = `
  <img src="${n.img}" alt="${n.name}" />
  <div class="notification-row">
    <div class="notification-content">
      <p>
        <strong>${n.name}</strong> <span class="action-text">${n.action}</span>
        ${n.post ? `<strong style="color:#0a327b;"> ${n.post}</strong>` : ""}
        ${n.unread ? '<span class="notification-dot"></span>' : ""}
      </p>
      <p class="time">${n.time}</p>
      ${n.message ? `<div class="private-message">${n.message}</div>` : ""}
    </div>
    ${n.commentImg ? `<img class="comment-img" src="${n.commentImg}" alt="comment image">` : ""}
  </div>
`;
    list.appendChild(li);

    })
    notifCount.textContent=unreadCount;
}
    markReadBtn.addEventListener("click", () => {
  notifications.forEach(n => n.unread = false);
  renderNotifications();
});

renderNotifications();
