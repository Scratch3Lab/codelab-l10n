const json = {
    "en": {
        "codelab.verify": "verify [hass_https]",

        "wechat.whenMessageReceive": "when I receive [content]",
        "wechat.getComingMessage": "received message [userOrText]",
        "wechat.sendMessage": "broadcast [USER_TYPE] [USER] text[TEXT]",

        //vector
        "vector.say": "say [TEXT]",
        "vector.move": "drive [distance]mm at [speed]mm/s",
        "vector.turn": "turn [angle]° at [speed] °/s",
        "vector.play": "play [EMOTION] animation",
        "vector.animation_name": "anim: [NAME]",
        "vector.python_exec": "exec [CODE]",
        "vector.whenMessageReceive": "when I receive [message_content]",
        "vector.getComingMessage": "received message",

        //usb microbit
        "usbMicrobit.showIcon": "showIcon [ICON_PARAM]",
        "usbMicrobit.whenbuttonispressed": "When Button [BUTTON_PARAM] Is Pressed",
        "usbMicrobit.buttonispressed": "Button [BUTTON_PARAM] Is Pressed?",
        "usbMicrobit.say": "say [TEXT]",
        "usbMicrobit.displaySymbol": "display [MATRIX]",
        "usbMicrobit.clearScreen": "clear screen",
        "usbMicrobit.get_gesture": "gesture is[gesture]?",
        "usbMicrobit.get_TiltAngle": "tilt angle [tiltDirection]",
        "usbMicrobit.isTilted": "tilted [tiltDirectionAny]?",
        "usbMicrobit.python_exec": "exec [CODE]",
        "usbMicrobit.get_analog_input": "Analog pin [ANALOG_PIN] value",
        "usbMicrobit.gesture.face_up": "face up",
        "usbMicrobit.gesture.face_down": "face down",
        "usbMicrobit.gesture.shake": "shake",
        "usbMicrobit.iconMenu.happy": "happy",
        "usbMicrobit.iconMenu.smile": "smile",
        "usbMicrobit.iconMenu.sad": "sad",
        "usbMicrobit.iconMenu.heart": "heart",
        "usbMicrobit.iconMenu.heart_small": "heart_small",
        "usbMicrobit.iconMenu.yes": "yes",
        "usbMicrobit.iconMenu.confused": "confused",
        "usbMicrobit.iconMenu.angry": "angry",
        "usbMicrobit.iconMenu.asleep": "asleep",
        "usbMicrobit.iconMenu.surprised": "surprised",
        "usbMicrobit.iconMenu.silly": "silly",
        "usbMicrobit.iconMenu.meh": "meh",
        "usbMicrobit.iconMenu.fabulous": "fabulous",
        "usbMicrobit.iconMenu.no": "no",


        "microbit.tiltDirectionMenu.front": "front",
        "microbit.tiltDirectionMenu.back": "back",
        "microbit.tiltDirectionMenu.left": "left",
        "microbit.tiltDirectionMenu.right": "right",
        "microbit.tiltDirectionMenu.any": "any",

        // ubtrobot
        "ubtrobot.actionMenu.forward": "forward",
        "ubtrobot.actionMenu.backward": "backward",
        "ubtrobot.actionMenu.left": "left",
        "ubtrobot.actionMenu.right": "right",
        "ubtrobot.actionMenu.init": "init",
        "ubtrobot.actionMenu.stop": "stop",
        "ubtrobot.actionMenu.happy birthday": "happy birthday",
        "ubtrobot.actionMenu.push ups": "push ups",
        "ubtrobot.actionMenu.left punch": "left punch",

        // tello
        "cxtello.actionMenu.command": "enable SDK",
        "cxtello.actionMenu.takeoff": "take off",
        "cxtello.actionMenu.land": "land",
        "cxtello.actionMenu.streamon": "video stream on",
        "cxtello.actionMenu.streamoff": "video stream off",
        "cxtello.actionMenu.emergency": "emergency",
        "cxtello.actionMenu.up": "move [CMD] [DISTANCE] cm",
        "cxtello.actionMenu.cw": "clockwise/anticlockwise [CMD] [DEGREE] °",
        "cxtello.actionMenu.direction": "flip [DIRECTION]",
        "cxtello.actionMenu.go": "go x:[X] y:[Y] z:[Z] speed:[SPEED]",
        "cxtello.actionMenu.setspeed":"set speed [SPEED]",
        "cxtello.actionMenu.setwifi": "set wifi:[WIFI] pass:[PASS]",
        "cxtello.actionMenu.setrc": "set roll:[A] pitch:[B] accelerator:[C] rotation:[D]",
        "cxtello.actionMenu.getspeed": "get speed",
        "cxtello.actionMenu.getbattery": "get battery",
        "cxtello.actionMenu.gettime": "get time",
        "cxtello.actionMenu.getheight": "get height",
        "cxtello.actionMenu.gettemp": "get temp",
        "cxtello.actionMenu.getattitude": "get attitude",
        "cxtello.actionMenu.getbaro": "get baro",
        "cxtello.actionMenu.getacceleration": "get acceleration",
        "cxtello.actionMenu.gettof": "get tof",
        "cxtello.actionMenu.getwifi": "get wifi",
        "cxtello.cmdmenu.up": "up",
        "cxtello.cmdmenu.down": "down",
        "cxtello.cmdmenu.left": "left",
        "cxtello.cmdmenu.right": "right",
        "cxtello.cmdmenu.forward": "forward",
        "cxtello.cmdmenu.back": "back",
        "cxtello.cwmenu.cw": "cw",
        "cxtello.cwmenu.ccw": "ccw",
        "cxtello.directionmenu.l": "l",
        "cxtello.directionmenu.r": "r",
        "cxtello.directionmenu.b": "b",
        "cxtello.directionmenu.f": "f",

        // posenet
        "Scratch3Pose.isloaded": "is loaded",
        "Scratch3Pose.getPoseScore": "pose [pose] confidence",
        "Scratch3Pose.getResult": "pose [pose] part [part] position [position]",
        "Scratch3Pose.getResultScore": "pose [pose] part [part] confidence",
        "Scratch3Pose.part_menu.nose": "nose",
        "Scratch3Pose.part_menu.leftEye": "leftEye",
        "Scratch3Pose.part_menu.rightEye": "rightEye",
        "Scratch3Pose.part_menu.leftEar": "leftEar",
        "Scratch3Pose.part_menu.rightEar": "rightEar",
        "Scratch3Pose.part_menu.leftShoulder": "leftShoulder",
        "Scratch3Pose.part_menu.rightShoulder": "rightShoulder",
        "Scratch3Pose.part_menu.leftElbow": "leftElbow",
        "Scratch3Pose.part_menu.rightElbow": "rightElbow",
        "Scratch3Pose.part_menu.leftWrist": "leftWrist",
        "Scratch3Pose.part_menu.rightWrist": "rightWrist",
        "Scratch3Pose.part_menu.leftHip": "leftHip",
        "Scratch3Pose.part_menu.rightHip": "rightHip",
        "Scratch3Pose.part_menu.leftKnee": "leftKnee",
        "Scratch3Pose.part_menu.rightKnee": "rightKnee",
        "Scratch3Pose.part_menu.leftAnkle": "leftAnkle",
        "Scratch3Pose.part_menu.rightAnkle": "rightAnkle",

        //mpfshell
        "mpfshell.listenTopic": "Listening to the [TOPIC] ",
        "mpfshell.open": "open [DATA]",
        "mpfshell.exec": "exec [DATA]",
        "mpfshell.defaultCodeToExec": "print('mpfshell')",
        "mpfshell.close": "close",
        "mpfshell.mpfshell": "mpfshell [TOPIC] [DATA]",
        "mpfshell.defaultTopicToMpfshell": "exec",
        "mpfshell.defaultDataToMpfshell": "print('mpfshell')",

        // knn
        "knn.isloaded": "is loaded",
        "knn.train": "Train label [type] [STRING]",
        "knn.trainA": "Train label 1 [STRING]",
        "knn.trainB": "Train label 2 [STRING]",
        "knn.trainC": "Train label 3 [STRING]",
        "knn.trainD": "Train label 4 [STRING]",
        "knn.trainE": "Train label 5 [STRING]",
        "knn.trainF": "Train label 6 [STRING]",
        "knn.reset": "Reset [STRING]",
        "knn.samples": "Samples [STRING]",
        "knn.getResult": "Result",
        "knn.getConfidence": "getConfidence [STRING]",
        "knn.whenGetResult": "when get [STRING]",

        // leap montion
        "leapMotion.handPositon": "手 [Hand] 位置 [Coordinate]",
        "leapMotion.handRotation": "手 [Hand] 旋转",
        "leapMotion.handFingerdipPosition": "手 [Hand] 手指 [Finger] 位置 [Coordinate]",

        // HomeAssistant
        "cxhomeassistant.connect_to_hass": "Connect To Home Assistant at [hass_uri]",
        "cxhomeassistant.hass_is_connected": "is connected?",
        "cxhomeassistant.get_entity_id": "entity_name:[entity_name] entity_id:[entity_id]",
        "cxhomeassistant.all_entities": "all_entities",
        "cxhomeassistant.turn_light_or_switch_plug": "Turn [Light_or_Switch] [light_switch_id] [on_off]",
        "cxhomeassistant.setLightColorToColor": "set light(s) [light_id] color to [COLOR]",
        "cxhomeassistant.setLightBrightness": "set light [light_id] brightness to [brightness]",
        "cxhomeassistant.setLightEffect": "set light [light_id] Effect to [effect]",
        "cxhomeassistant.controlTheDoor": "[operate] the door",
        "cxhomeassistant.controlTheCurtain": "[operate_curtain] [curtain_id] curtain",
        "cxhomeassistant.setCoverPosition": "set cover [curtain_id] position:[position]",
        "cxhomeassistant.whenbuttonispressed": "When Click Switch [click_switch_id] [click_mode]",
        "cxhomeassistant.whenmotionsensorstatechange": "When somebody [left_came]",
        "cxhomeassistant.whendoorwindowsensorstatechange": "When Door/Window [open_close]",
        "cxhomeassistant.whencubechange": "When cube [cube_id] [cube_action]",
        "cxhomeassistant.light_or_switch_menu.switch": "switch",
        "cxhomeassistant.light_or_switch_menu.light": "light",
        "cxhomeassistant.switch_name_menu.switch0": "switch0",
        "cxhomeassistant.switch_name_menu.switch1": "switch1",
        "cxhomeassistant.switch_name_menu.switch2": "switch2",
        "cxhomeassistant.open_close_menu.open": "open",
        "cxhomeassistant.open_close_menu.close": "close",
        "cxhomeassistant.left_came_menu.left": "left",
        "cxhomeassistant.left_came_menu.came": "came",
        "cxhomeassistant.on_off_menu.on": "on",
        "cxhomeassistant.on_off_menu.off": "off",
        "cxhomeassistant.cube_action_menu.slide": "slide",
        "cxhomeassistant.cube_action_menu.flip90": "flip90",
        "cxhomeassistant.cube_action_menu.flip180": "flip180",
        "cxhomeassistant.cube_action_menu.rotate_left": "rotate_left",
        "cxhomeassistant.cube_action_menu.rotate_right": "rotate_right",
        "cxhomeassistant.cube_action_menu.shake": "shake",
        "cxhomeassistant.cube_action_menu.tap": "tap",
        "cxhomeassistant.operate_menu.open": "open",
        "cxhomeassistant.operate_menu.close": "close",
        "cxhomeassistant.operate_curtain_menu.lower": "lower",
        "cxhomeassistant.operate_curtain_menu.raise": "raise",
        "cxhomeassistant.operate_curtain_menu.stop": "stop",
        "cxhomeassistant.effect_menu.Disco": "Disco",
        "cxhomeassistant.effect_menu.Slow_Temp": "Slow_Temp",
        "cxhomeassistant.effect_menu.Strobe_epilepsy": "Strobe_epilepsy",
        "cxhomeassistant.effect_menu.Strobe_color": "Strobe_color",
        "cxhomeassistant.effect_menu.Alarm": "Alarm",
        "cxhomeassistant.effect_menu.Police": "Police",
        "cxhomeassistant.effect_menu.Police2": "Police2",
        "cxhomeassistant.effect_menu.Christmas": "Christmas",
        "cxhomeassistant.effect_menu.RGB": "RGB",
        "cxhomeassistant.effect_menu.Random_Loop": "Random_Loop",
        "cxhomeassistant.effect_menu.Fast_Random_Loop": "Fast_Random_Loop",
        "cxhomeassistant.effect_menu.LSD": "LSD",
        "cxhomeassistant.effect_menu.Slowdown": "Slowdown",
        "cxhomeassistant.effect_menu.WhatsApp": "WhatsApp",
        "cxhomeassistant.effect_menu.Facebook": "Facebook",
        "cxhomeassistant.effect_menu.Twitter": "Twitter",
        "cxhomeassistant.effect_menu.Stop": "Stop",
        "cxhomeassistant.click_mode_menu.single": "single",
        "cxhomeassistant.click_mode_menu.double": "double",
        "cxhomeassistant.click_mode_menu.long_release": "long_release",



        //eim
        "eim.whenMessageReceive": "when I receive [DATA]",
        "eim.getComingMessage": "received message",
        "eim.sendMessage": "broadcast [DATA]",
        "eim.whenTopicMessageReceive": "when I receive [TOPIC] [DATA]",
        "eim.sendTopicMessage": "broadcast [TOPIC] [DATA]",
        "eim.control_extension":  "[turn] [extension_name]",
        "eim.is_extension_turned_on": "is [extension_name] turned on?",
        "eim.sendMessageAndWait":  "broadcast [content] and wait",

        //cozmo
        "cozmo.say": "say [TEXT]",
        "cozmo.move": "drive [distance]mm at [speed]mm/s",
        "cozmo.turn": "turn [angle]° at [speed] °/s",
        "cozmo.play": "play [EMOTION] animation",
        "cozmo.animation_name": "anim: [NAME]",
        "cozmo.python_exec": "exec [CODE]",
        "cozmo.whenMessageReceive": "when I receive [message_content]",
        "cozmo.getComingMessage": "received message",

        //box2d
        "griffpatch.categoryName": "Physics",
        "griffpatch.setStage": "setup stage [stageType]",
        "griffpatch.setGravity": "set gravity to x: [gx] y: [gy]",
        "griffpatch.setPhysics": "enable for [shape] mode [mode]",
        "griffpatch.doTick": "step simulation",
        "griffpatch.setPosition": "go to x: [x] y: [y] [space]",
        "griffpatch.setVelocity": "set velocity to sx: [sx] sy: [sy]",
        "griffpatch.changeVelocity": "change velocity by sx: [sx] sy: [sy]",
        "griffpatch.getVelocityX": "x velocity",
        "griffpatch.getVelocityY": "y velocity",
        "griffpatch.applyForce": "push with force [force] in direction [dir]",
        "griffpatch.applyAngForce": "spin with force [force]",
        "griffpatch.setStatic": "set fixed [static]",
        "griffpatch.setProperties": "set density [density] roughness [friction] bounce [restitution]",
        "griffpatch.getTouching": "touching [where]",
        "griffpatch.setScroll": "set scroll x: [ox] y: [oy]",
        "griffpatch.changeScroll": "change scroll by x: [ox] y: [oy]",
        "griffpatch.getScrollX": "x scroll",
        "griffpatch.getScrollY": "y scroll",

        //blender
        "blender.whenMessageReceive": "when I receive [content]",
        "blender.getComingMessage": "received message",
        "blender.sendMessage": "exec [content]",
        "blender.exec_and_get_result": "exec [content]"
    },
    "zh-cn": {
      // https 验证
      "codelab.verify": "验证 [hass_https]",

      // usbMicrobit
      "usbMicrobit.showIcon": "显示图像[ICON_PARAM]",
      "usbMicrobit.whenbuttonispressed": "当按下 [BUTTON_PARAM] 按钮",
      "usbMicrobit.buttonispressed": "按下 [BUTTON_PARAM] 按钮",
      "usbMicrobit.get_accelerometer": "加速度[ACCELEROMETER_PARAM]",
      "usbMicrobit.say": "显示文本 [TEXT]",
      "usbMicrobit.displaySymbol": "显示 [MATRIX]",
      "usbMicrobit.clearScreen": "清屏屏幕",
      "usbMicrobit.get_TiltAngle": "向[tiltDirection]倾斜",
      "usbMicrobit.get_accelerometer": "Accelerometer [ACCELEROMETER_PARAM]",
      "usbMicrobit.isTilted": "向[tiltDirectionAny]倾斜",
      "usbMicrobit.get_analog_input": "读取模拟口 [ANALOG_PIN] 值",
      "usbMicrobit.get_gesture": "姿态是[gesture]",
      "usbMicrobit.gesture.face_up": "朝上",
      "usbMicrobit.gesture.face_down": "朝下",
      "usbMicrobit.gesture.shake": "摇动",
      "usbMicrobit.python_exec": "执行代码[CODE]",
      "usbMicrobit.iconMenu.happy": "开心",
      "usbMicrobit.iconMenu.smile": "微笑",
      "usbMicrobit.iconMenu.sad": "伤心",
      "usbMicrobit.iconMenu.heart": "大爱心",
      "usbMicrobit.iconMenu.heart_small": "小爱心",
      "usbMicrobit.iconMenu.yes": "胜利",
      "usbMicrobit.iconMenu.confused": "疑惑",
      "usbMicrobit.iconMenu.angry": "生气",
      "usbMicrobit.iconMenu.asleep": "睡觉",
      "usbMicrobit.iconMenu.surprised": "惊喜",
      "usbMicrobit.iconMenu.silly": "蠢盟",
      "usbMicrobit.iconMenu.meh": "无聊",
      "usbMicrobit.iconMenu.fabulous": "真棒",
      "usbMicrobit.iconMenu.no": "拒绝",

      //cozmo
      "cozmo.say": "说 [TEXT]",
      "cozmo.move": "以[speed]mm/s移动[distance]mm",
      "cozmo.turn": "以[speed]°/s转动[angle]° ",
      "cozmo.play": "运行[EMOTION]动作",
      "cozmo.animation_name":"动作:[NAME]",
      "cozmo.python_exec": "执行[CODE]",
      "cozmo.whenMessageReceive": "当接收到[message_content]",
      "cozmo.getComingMessage":"收到的消息",

      //vector
      "vector.say": "说 [TEXT]",
      "vector.move": "以[speed]mm/s移动[distance]mm",
      "vector.turn": "以[speed]°/s转动[angle]° ",
      "vector.play": "运行[EMOTION]动作",
      "vector.animation_name": "动作:[NAME]",
      "vector.python_exec": "执行[CODE]",
      "vector.whenMessageReceive": "当接收到[message_content]",
      "vector.getComingMessage": "收到的消息",

      // tello
      "cxtello.actionMenu.command": "控制飞机",
      "cxtello.actionMenu.takeoff": "起飞",
      "cxtello.actionMenu.land": "降落",
      "cxtello.actionMenu.streamon": "打开视频流",
      "cxtello.actionMenu.streamoff": "关闭视频流",
      "cxtello.actionMenu.emergency": "停止电机转动",
      "cxtello.actionMenu.up": "移动 [CMD] [DISTANCE] cm",
      "cxtello.actionMenu.cw": "顺时针/逆时针 [CMD] [DEGREE] °",
      "cxtello.actionMenu.direction": "翻滚 [DIRECTION]",
      "cxtello.actionMenu.go": "飞向 x:[X] y:[Y] z:[Z] 速度:[SPEED]",
      "cxtello.actionMenu.setspeed":"设置速度 [SPEED]",
      "cxtello.actionMenu.setwifi": "设置 wifi:[WIFI] pass:[PASS]",
      "cxtello.actionMenu.setrc": "设置 横滚:[A] 俯仰:[B] 油门:[C] 偏航:[D]",
      "cxtello.actionMenu.getspeed": "速度？",
      "cxtello.actionMenu.getbattery": "电量？",
      "cxtello.actionMenu.gettime": "时间？",
      "cxtello.actionMenu.getheight": "高度？",
      "cxtello.actionMenu.gettemp": "温度？",
      "cxtello.actionMenu.getattitude": " 三轴姿态数据？",
      "cxtello.actionMenu.getbaro": "气压计高度？",
      "cxtello.actionMenu.getacceleration": "三轴加速度数据？",
      "cxtello.actionMenu.gettof": "tof高度？",
      "cxtello.actionMenu.getwifi": "wifi信噪比？",
      "cxtello.cmdmenu.up": "上",
      "cxtello.cmdmenu.down": "下",
      "cxtello.cmdmenu.left": "左",
      "cxtello.cmdmenu.right": "右",
      "cxtello.cmdmenu.forward": "前",
      "cxtello.cmdmenu.back": "后",
      "cxtello.cwmenu.cw": "顺时针",
      "cxtello.cwmenu.ccw": "逆时针",
      "cxtello.directionmenu.l": "左",
      "cxtello.directionmenu.r": "右",
      "cxtello.directionmenu.b": "后",
      "cxtello.directionmenu.f": "前",

      // HomeAssistant
      "cxhomeassistant.connect_to_hass": "连接到消息中心:[hass_uri]",
      "cxhomeassistant.hass_is_connected": "连接成功?",
      "cxhomeassistant.get_entity_id": "设备名称:[entity_name] 设备ID:[entity_id]",
      "cxhomeassistant.all_entities": "所有设备",
      "cxhomeassistant.turn_light_or_switch_plug": "将[Light_or_Switch][light_switch_id]设为[on_off]",
      "cxhomeassistant.setLightColorToColor": "设置灯泡[light_id]颜色[COLOR]",
      "cxhomeassistant.setLightBrightness": "设置灯泡[light_id]亮度[brightness]",
      "cxhomeassistant.setLightEffect": "设置灯泡[light_id]特效[effect]",
      "cxhomeassistant.controlTheDoor": "[operate]门",
      "cxhomeassistant.controlTheCurtain": "[operate_curtain]窗帘[curtain_id]",
      "cxhomeassistant.setCoverPosition": "设置窗帘[curtain_id]位置[position]",
      "cxhomeassistant.whenbuttonispressed": "当开关[click_switch_id] [click_mode]",
      "cxhomeassistant.whenmotionsensorstatechange": "当有人[left_came]",
      "cxhomeassistant.whendoorwindowsensorstatechange": "当门被[open_close]",
      "cxhomeassistant.whencubechange": "当立方体 [cube_id] [cube_action]",
      "cxhomeassistant.light_or_switch_menu.switch": "开关",
      "cxhomeassistant.light_or_switch_menu.light": "灯泡",
      "cxhomeassistant.switch_name_menu.switch0": "switch0",
      "cxhomeassistant.switch_name_menu.switch1": "switch1",
      "cxhomeassistant.switch_name_menu.switch2": "switch2",
      "cxhomeassistant.open_close_menu.open": "打开",
      "cxhomeassistant.open_close_menu.close": "关闭",
      "cxhomeassistant.left_came_menu.left": "离开",
      "cxhomeassistant.left_came_menu.came": "进入",
      "cxhomeassistant.on_off_menu.on": "打开",
      "cxhomeassistant.on_off_menu.off": "关闭",
      "cxhomeassistant.cube_action_menu.slide": "滑动",
      "cxhomeassistant.cube_action_menu.flip90": "翻转90度",
      "cxhomeassistant.cube_action_menu.flip180": "翻转180度",
      "cxhomeassistant.cube_action_menu.rotate_left": "左转",
      "cxhomeassistant.cube_action_menu.rotate_right": "右转",
      "cxhomeassistant.cube_action_menu.shake": "摇晃",
      "cxhomeassistant.cube_action_menu.tap": "敲击两下",
      "cxhomeassistant.operate_menu.open": "打开",
      "cxhomeassistant.operate_menu.close": "关闭",
      "cxhomeassistant.operate_curtain_menu.lower": "降下",
      "cxhomeassistant.operate_curtain_menu.raise": "升起",
      "cxhomeassistant.operate_curtain_menu.stop": "停止",
      "cxhomeassistant.effect_menu.Disco": "舞厅",
      "cxhomeassistant.effect_menu.Slow_Temp": "暂停",
      "cxhomeassistant.effect_menu.Strobe_epilepsy": "闪烁",
      "cxhomeassistant.effect_menu.Strobe_color": "快速变幻颜色",
      "cxhomeassistant.effect_menu.Alarm": "警报1",
      "cxhomeassistant.effect_menu.Police": "警报2",
      "cxhomeassistant.effect_menu.Police2": "警报3",
      "cxhomeassistant.effect_menu.Christmas": "圣诞",
      "cxhomeassistant.effect_menu.RGB": "彩光",
      "cxhomeassistant.effect_menu.Random_Loop": "随即循环",
      "cxhomeassistant.effect_menu.Fast_Random_Loop": "快速随机循环",
      "cxhomeassistant.effect_menu.LSD": "迷幻",
      "cxhomeassistant.effect_menu.Slowdown": "慢一点",
      "cxhomeassistant.effect_menu.WhatsApp": "来消息了1",
      "cxhomeassistant.effect_menu.Facebook": "来消息了2",
      "cxhomeassistant.effect_menu.Twitter": "来消息了3",
      "cxhomeassistant.effect_menu.Stop": "停止",
      "cxhomeassistant.click_mode_menu.single": "单击",
      "cxhomeassistant.click_mode_menu.double": "双击",
      "cxhomeassistant.click_mode_menu.long_release": "长按",

      //eim
      "eim.whenMessageReceive": "当接收到[DATA]",
      "eim.getComingMessage": "收到的消息",
      "eim.sendMessage": "广播[DATA]",
      "eim.whenTopicMessageReceive": "当接收到[TOPIC] [DATA]",
      "eim.sendTopicMessage": "广播 [TOPIC] [DATA]",
      "eim.control_extension":  "[turn] [extension_name]",
      "eim.is_extension_turned_on": "[extension_name]已开启?",
      "eim.sendMessageAndWait":  "广播 [content] 然后等待",

      // wechat
      "wechat.whenMessageReceive": "当接收到[content]",
      "wechat.getComingMessage": "收到的消息[userOrText]",
      "wechat.sendMessage": "广播[USER_TYPE][USER]内容[TEXT]",

      // posenet
      "Scratch3Pose.isloaded": "已加载？",
      'Scratch3Pose.getPoseScore': '人体 [pose] 置信度',
      'Scratch3Pose.getResult': '人体 [pose] 部位 [part] 位置 [position]',
      'Scratch3Pose.getResultScore': '人体 [pose] 部位 [part] 置信度',
      "Scratch3Pose.part_menu.nose": "鼻子",
      "Scratch3Pose.part_menu.leftEye": "左眼",
      "Scratch3Pose.part_menu.rightEye": "右眼",
      "Scratch3Pose.part_menu.leftEar": "左耳",
      "Scratch3Pose.part_menu.rightEar": "右耳",
      "Scratch3Pose.part_menu.leftShoulder": "左肩膀",
      "Scratch3Pose.part_menu.rightShoulder": "右肩膀",
      "Scratch3Pose.part_menu.leftElbow": "左肘",
      "Scratch3Pose.part_menu.rightElbow": "右肘",
      "Scratch3Pose.part_menu.leftWrist": "左手腕",
      "Scratch3Pose.part_menu.rightWrist": "右手腕",
      "Scratch3Pose.part_menu.leftHip": "左臀",
      "Scratch3Pose.part_menu.rightHip": "右臀",
      "Scratch3Pose.part_menu.leftKnee": "左膝盖",
      "Scratch3Pose.part_menu.rightKnee": "右膝盖",
      "Scratch3Pose.part_menu.leftAnkle": "左脚踝",
      "Scratch3Pose.part_menu.rightAnkle": "右脚踝",

      // knn
      "knn.isloaded": "已加载？",
      "knn.train": "训练 [type] [STRING]",
      "knn.reset": "重置 [STRING]",
      "knn.samples": "样本 [STRING]",
      "knn.getResult": "结果",
      "knn.getConfidence": "置信度 [STRING]",
      "knn.whenGetResult": "当获得 [STRING]"
    }
  };
