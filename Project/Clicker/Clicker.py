import tkinter as tk
import pyautogui
import time
import threading
import ctypes
import keyboard

pyautogui.PAUSE = 0  # Убираем встроенную задержку

class ClickerApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Автокликер")
        
        self.running = False
        self.interval = 0.1
        self.button = 'left'
        self.click_type = 'single'
        self.use_current_position = True
        self.x, self.y = 0, 0
        
        # Интервал кликов
        self.interval_label = tk.Label(master, text="Интервал (сек):")
        self.interval_label.pack()
        self.interval_entry = tk.Entry(master)
        self.interval_entry.insert(0, "0.1")
        self.interval_entry.pack()

        # Выбор кнопки
        self.button_label = tk.Label(master, text="Кнопка:")
        self.button_label.pack()
        self.button_var = tk.StringVar(value='left')
        self.left_button = tk.Radiobutton(master, text="Левая", variable=self.button_var, value='left')
        self.left_button.pack(anchor=tk.W)
        self.right_button = tk.Radiobutton(master, text="Правая", variable=self.button_var, value='right')
        self.right_button.pack(anchor=tk.W)

        # Выбор типа клика
        self.click_type_label = tk.Label(master, text="Тип клика:")
        self.click_type_label.pack()
        self.click_type_var = tk.StringVar(value='single')
        self.single_click = tk.Radiobutton(master, text="Одиночный", variable=self.click_type_var, value='single')
        self.single_click.pack(anchor=tk.W)
        self.double_click = tk.Radiobutton(master, text="Двойной", variable=self.click_type_var, value='double')
        self.double_click.pack(anchor=tk.W)

        # Позиция курсора
        self.position_label = tk.Label(master, text="Позиция курсора:")
        self.position_label.pack()
        self.position_var = tk.BooleanVar(value=True)
        self.current_position = tk.Radiobutton(master, text="Текущая", variable=self.position_var, value=True)
        self.current_position.pack(anchor=tk.W)
        self.custom_position = tk.Radiobutton(master, text="Заданная", variable=self.position_var, value=False)
        self.custom_position.pack(anchor=tk.W)
        
        self.x_label = tk.Label(master, text="X:")
        self.x_label.pack()
        self.x_entry = tk.Entry(master)
        self.x_entry.insert(0, "0")
        self.x_entry.pack()

        self.y_label = tk.Label(master, text="Y:")
        self.y_label.pack()
        self.y_entry = tk.Entry(master)
        self.y_entry.insert(0, "0")
        self.y_entry.pack()
        
        # Управление
        self.start_button = tk.Button(master, text="Начать", command=self.start_clicking)
        self.start_button.pack(pady=5)
        
        self.stop_button = tk.Button(master, text="Остановить", command=self.stop_clicking)
        self.stop_button.pack(pady=5)
        
        self.status_label = tk.Label(master, text="Статус: Остановлен")
        self.status_label.pack(pady=10)
        
        keyboard.add_hotkey("f6", self.toggle_clicking)
    
    def start_clicking(self):
        try:
            self.interval = float(self.interval_entry.get())
        except ValueError:
            self.interval = 0.1

        self.button = self.button_var.get()
        self.click_type = self.click_type_var.get()
        self.use_current_position = self.position_var.get()

        if not self.use_current_position:
            try:
                self.x = int(self.x_entry.get())
                self.y = int(self.y_entry.get())
            except ValueError:
                self.x, self.y = 0, 0

        if not self.running:
            self.running = True
            self.status_label.config(text="Статус: Запущен")
            self.click_thread = threading.Thread(target=self.autoclick)
            self.click_thread.start()

    def stop_clicking(self):
        if self.running:
            self.running = False
            self.status_label.config(text="Статус: Остановлен")

    def toggle_clicking(self):
        if self.running:
            self.stop_clicking()
        else:
            self.start_clicking()

    def autoclick(self):
        while self.running:
            if self.use_current_position:
                x, y = pyautogui.position()
            else:
                x, y = self.x, self.y
                
            if self.click_type == 'single':
                pyautogui.click(x, y, button=self.button)
            elif self.click_type == 'double':
                pyautogui.doubleClick(x, y, button=self.button)
            
            time.sleep(self.interval)

if __name__ == "__main__":
    root = tk.Tk()
    app = ClickerApp(root)
    root.mainloop()
