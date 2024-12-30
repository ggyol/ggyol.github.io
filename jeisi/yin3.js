// 当整个文档加载完成后，执行以下函数
document.addEventListener('DOMContentLoaded', function () {
    // 获取页面中ID为'audio'的<audio>元素
    var audio = document.getElementById('audio');
    // 获取页面中ID为'musicControl'的元素，这通常是一个按钮，用于控制音乐播放
    var musicControl = document.getElementById('musicControl');
    // 创建一个变量isPlaying，用来记录音乐是否正在播放，初始值为false，表示音乐未播放
    var isPlaying = false;
    // 获取<audio>元素中所有的<source>子元素，存储在sources数组中
    var sources = audio.querySelectorAll('source');
    // 创建一个变量currentSourceIndex，用来记录当前播放的是数组sources中的第几个音轨，初始值为0
    var currentSourceIndex = 0;
  
    // 定义一个函数toggleMusic，用于切换音乐的播放和暂停状态
    function toggleMusic() {
      // 如果isPlaying为true，表示音乐正在播放，我们执行暂停操作
      if (isPlaying) {
        audio.pause(); // 调用audio元素的pause方法来暂停音乐
        musicControl.classList.remove("playing"); // 从musicControl元素中移除"playing"类，这通常会改变按钮的外观
      } else {
        // 如果isPlaying为false，表示音乐未播放，我们执行播放操作
        audio.play(); // 调用audio元素的play方法来播放音乐
        musicControl.classList.add("playing"); // 给musicControl元素添加"playing"类，这通常会改变按钮的外观
      }
      // 无论音乐是播放还是暂停，我们都将isPlaying的值取反，以反映新的播放状态
      isPlaying = !isPlaying;
    }
  
    // 为audio元素添加一个事件监听器，当音乐开始播放时，给musicControl元素添加"playing"类
    audio.addEventListener('play', function() {
      musicControl.classList.add("playing");
    });
  
    // 为audio元素添加一个事件监听器，当音乐暂停时，从musicControl元素中移除"playing"类
    audio.addEventListener('pause', function() {
      musicControl.classList.remove("playing");
    });
  
    // 为audio元素添加一个事件监听器，当音乐播放结束时，执行以下操作
    audio.addEventListener('ended', function() {
      // 计算下一个音轨的索引，如果当前是最后一首，则回到第一首
      currentSourceIndex = (currentSourceIndex + 1) % sources.length;
      // 设置audio元素的src属性为下一个音轨的src
      audio.src = sources[currentSourceIndex].src;
      // 重新加载音频，准备播放下一首歌曲
      audio.load();
      // 播放下一首歌曲
      audio.play();
    });
  
    // 为musicControl元素添加一个点击事件监听器，当按钮被点击时，调用toggleMusic函数
    document.getElementById('musicControl').addEventListener('click', toggleMusic);
  });