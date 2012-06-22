/* Everything */

/* Qt Edition */
#ifndef QT_EDITION
#  define QT_EDITION QT_EDITION_OPENSOURCE
#endif

/* Machine byte-order */
#define Q_BIG_ENDIAN 4321
#define Q_LITTLE_ENDIAN 1234
#define QT_BUILD_KEY "macosx macx-cocoa g++-4 full-config"
#define QT_BUILD_KEY_COMPAT "x86_64 Darwin g++-4 full-config"

#ifdef QT_BOOTSTRAPPED
#if defined(__BIG_ENDIAN__)
# define Q_BYTE_ORDER Q_BIG_ENDIAN
#elif defined(__LITTLE_ENDIAN__)
# define Q_BYTE_ORDER Q_LITTLE_ENDIAN
#else
# error "Unable to determine byte order!"
#endif
#else
#if defined(__BIG_ENDIAN__)
# define Q_BYTE_ORDER Q_BIG_ENDIAN
#elif defined(__LITTLE_ENDIAN__)
# define Q_BYTE_ORDER Q_LITTLE_ENDIAN
#else
# error "Unable to determine byte order!"
#endif
#endif
/* Machine Architecture */
#ifndef QT_BOOTSTRAPPED
# define QT_ARCH_MACOSX
#else
# define QT_ARCH_MACOSX
#endif
/* Compile time features */
#define QT_LARGEFILE_SUPPORT 64
#define QT_MAC_USE_COCOA 1
#if defined(__LP64__)
# define QT_POINTER_SIZE 8
#else
# define QT_POINTER_SIZE 4
#endif

#ifndef QT_BOOTSTRAPPED

#if defined(QT_BUILTIN_GIF_READER) && defined(QT_NO_BUILTIN_GIF_READER)
# undef QT_BUILTIN_GIF_READER
#elif !defined(QT_BUILTIN_GIF_READER) && !defined(QT_NO_BUILTIN_GIF_READER)
# define QT_BUILTIN_GIF_READER 1
#endif

#if defined(QT_GRAPHICSSYSTEM_RASTER) && defined(QT_NO_GRAPHICSSYSTEM_RASTER)
# undef QT_GRAPHICSSYSTEM_RASTER
#elif !defined(QT_GRAPHICSSYSTEM_RASTER) && !defined(QT_NO_GRAPHICSSYSTEM_RASTER)
# define QT_GRAPHICSSYSTEM_RASTER
#endif

#if defined(QT_NO_ACCESSIBILITY) && defined(QT_ACCESSIBILITY)
# undef QT_NO_ACCESSIBILITY
#elif !defined(QT_NO_ACCESSIBILITY) && !defined(QT_ACCESSIBILITY)
# define QT_NO_ACCESSIBILITY
#endif

#if defined(QT_NO_ALSA) && defined(QT_ALSA)
# undef QT_NO_ALSA
#elif !defined(QT_NO_ALSA) && !defined(QT_ALSA)
# define QT_NO_ALSA
#endif

#if defined(QT_NO_CLOCK_MONOTONIC) && defined(QT_CLOCK_MONOTONIC)
# undef QT_NO_CLOCK_MONOTONIC
#elif !defined(QT_NO_CLOCK_MONOTONIC) && !defined(QT_CLOCK_MONOTONIC)
# define QT_NO_CLOCK_MONOTONIC
#endif

#if defined(QT_NO_CUPS) && defined(QT_CUPS)
# undef QT_NO_CUPS
#elif !defined(QT_NO_CUPS) && !defined(QT_CUPS)
# define QT_NO_CUPS
#endif

#if defined(QT_NO_DBUS) && defined(QT_DBUS)
# undef QT_NO_DBUS
#elif !defined(QT_NO_DBUS) && !defined(QT_DBUS)
# define QT_NO_DBUS
#endif

#if defined(QT_NO_DECLARATIVE) && defined(QT_DECLARATIVE)
# undef QT_NO_DECLARATIVE
#elif !defined(QT_NO_DECLARATIVE) && !defined(QT_DECLARATIVE)
# define QT_NO_DECLARATIVE
#endif

#if defined(QT_NO_EGL) && defined(QT_EGL)
# undef QT_NO_EGL
#elif !defined(QT_NO_EGL) && !defined(QT_EGL)
# define QT_NO_EGL
#endif

#if defined(QT_NO_FREETYPE) && defined(QT_FREETYPE)
# undef QT_NO_FREETYPE
#elif !defined(QT_NO_FREETYPE) && !defined(QT_FREETYPE)
# define QT_NO_FREETYPE
#endif

#if defined(QT_NO_GLIB) && defined(QT_GLIB)
# undef QT_NO_GLIB
#elif !defined(QT_NO_GLIB) && !defined(QT_GLIB)
# define QT_NO_GLIB
#endif

#if defined(QT_NO_GSTREAMER) && defined(QT_GSTREAMER)
# undef QT_NO_GSTREAMER
#elif !defined(QT_NO_GSTREAMER) && !defined(QT_GSTREAMER)
# define QT_NO_GSTREAMER
#endif

#if defined(QT_NO_GUI) && defined(QT_GUI)
# undef QT_NO_GUI
#elif !defined(QT_NO_GUI) && !defined(QT_GUI)
# define QT_NO_GUI
#endif

#if defined(QT_NO_ICD) && defined(QT_ICD)
# undef QT_NO_ICD
#elif !defined(QT_NO_ICD) && !defined(QT_ICD)
# define QT_NO_ICD
#endif

#if defined(QT_NO_ICONV) && defined(QT_ICONV)
# undef QT_NO_ICONV
#elif !defined(QT_NO_ICONV) && !defined(QT_ICONV)
# define QT_NO_ICONV
#endif

#if defined(QT_NO_INOTIFY) && defined(QT_INOTIFY)
# undef QT_NO_INOTIFY
#elif !defined(QT_NO_INOTIFY) && !defined(QT_INOTIFY)
# define QT_NO_INOTIFY
#endif

#if defined(QT_NO_MITSHM) && defined(QT_MITSHM)
# undef QT_NO_MITSHM
#elif !defined(QT_NO_MITSHM) && !defined(QT_MITSHM)
# define QT_NO_MITSHM
#endif

#if defined(QT_NO_MREMAP) && defined(QT_MREMAP)
# undef QT_NO_MREMAP
#elif !defined(QT_NO_MREMAP) && !defined(QT_MREMAP)
# define QT_NO_MREMAP
#endif

#if defined(QT_NO_MULTIMEDIA) && defined(QT_MULTIMEDIA)
# undef QT_NO_MULTIMEDIA
#elif !defined(QT_NO_MULTIMEDIA) && !defined(QT_MULTIMEDIA)
# define QT_NO_MULTIMEDIA
#endif

#if defined(QT_NO_NAS) && defined(QT_NAS)
# undef QT_NO_NAS
#elif !defined(QT_NO_NAS) && !defined(QT_NAS)
# define QT_NO_NAS
#endif

#if defined(QT_NO_NIS) && defined(QT_NIS)
# undef QT_NO_NIS
#elif !defined(QT_NO_NIS) && !defined(QT_NIS)
# define QT_NO_NIS
#endif

#if defined(QT_NO_OPENGL) && defined(QT_OPENGL)
# undef QT_NO_OPENGL
#elif !defined(QT_NO_OPENGL) && !defined(QT_OPENGL)
# define QT_NO_OPENGL
#endif

#if defined(QT_NO_OPENVG) && defined(QT_OPENVG)
# undef QT_NO_OPENVG
#elif !defined(QT_NO_OPENVG) && !defined(QT_OPENVG)
# define QT_NO_OPENVG
#endif

#if defined(QT_NO_PHONON) && defined(QT_PHONON)
# undef QT_NO_PHONON
#elif !defined(QT_NO_PHONON) && !defined(QT_PHONON)
# define QT_NO_PHONON
#endif

#if defined(QT_NO_S60) && defined(QT_S60)
# undef QT_NO_S60
#elif !defined(QT_NO_S60) && !defined(QT_S60)
# define QT_NO_S60
#endif

#if defined(QT_NO_SCRIPTTOOLS) && defined(QT_SCRIPTTOOLS)
# undef QT_NO_SCRIPTTOOLS
#elif !defined(QT_NO_SCRIPTTOOLS) && !defined(QT_SCRIPTTOOLS)
# define QT_NO_SCRIPTTOOLS
#endif

#if defined(QT_NO_SESSIONMANAGER) && defined(QT_SESSIONMANAGER)
# undef QT_NO_SESSIONMANAGER
#elif !defined(QT_NO_SESSIONMANAGER) && !defined(QT_SESSIONMANAGER)
# define QT_NO_SESSIONMANAGER
#endif

#if defined(QT_NO_SHAPE) && defined(QT_SHAPE)
# undef QT_NO_SHAPE
#elif !defined(QT_NO_SHAPE) && !defined(QT_SHAPE)
# define QT_NO_SHAPE
#endif

#if defined(QT_NO_STL) && defined(QT_STL)
# undef QT_NO_STL
#elif !defined(QT_NO_STL) && !defined(QT_STL)
# define QT_NO_STL
#endif

#if defined(QT_NO_STYLE_GTK) && defined(QT_STYLE_GTK)
# undef QT_NO_STYLE_GTK
#elif !defined(QT_NO_STYLE_GTK) && !defined(QT_STYLE_GTK)
# define QT_NO_STYLE_GTK
#endif

#if defined(QT_NO_STYLE_S60) && defined(QT_STYLE_S60)
# undef QT_NO_STYLE_S60
#elif !defined(QT_NO_STYLE_S60) && !defined(QT_STYLE_S60)
# define QT_NO_STYLE_S60
#endif

#if defined(QT_NO_SXE) && defined(QT_SXE)
# undef QT_NO_SXE
#elif !defined(QT_NO_SXE) && !defined(QT_SXE)
# define QT_NO_SXE
#endif

#if defined(QT_NO_XFIXES) && defined(QT_XFIXES)
# undef QT_NO_XFIXES
#elif !defined(QT_NO_XFIXES) && !defined(QT_XFIXES)
# define QT_NO_XFIXES
#endif

#if defined(QT_NO_XINERAMA) && defined(QT_XINERAMA)
# undef QT_NO_XINERAMA
#elif !defined(QT_NO_XINERAMA) && !defined(QT_XINERAMA)
# define QT_NO_XINERAMA
#endif

#if defined(QT_NO_XKB) && defined(QT_XKB)
# undef QT_NO_XKB
#elif !defined(QT_NO_XKB) && !defined(QT_XKB)
# define QT_NO_XKB
#endif

#if defined(QT_NO_XRANDR) && defined(QT_XRANDR)
# undef QT_NO_XRANDR
#elif !defined(QT_NO_XRANDR) && !defined(QT_XRANDR)
# define QT_NO_XRANDR
#endif

#if defined(QT_NO_XRENDER) && defined(QT_XRENDER)
# undef QT_NO_XRENDER
#elif !defined(QT_NO_XRENDER) && !defined(QT_XRENDER)
# define QT_NO_XRENDER
#endif

#if defined(QT_NO_XSYNC) && defined(QT_XSYNC)
# undef QT_NO_XSYNC
#elif !defined(QT_NO_XSYNC) && !defined(QT_XSYNC)
# define QT_NO_XSYNC
#endif

#if defined(QT_NO_ZLIB) && defined(QT_ZLIB)
# undef QT_NO_ZLIB
#elif !defined(QT_NO_ZLIB) && !defined(QT_ZLIB)
# define QT_NO_ZLIB
#endif

#if defined(QT_RUNTIME_XCURSOR) && defined(QT_NO_RUNTIME_XCURSOR)
# undef QT_RUNTIME_XCURSOR
#elif !defined(QT_RUNTIME_XCURSOR) && !defined(QT_NO_RUNTIME_XCURSOR)
# define QT_RUNTIME_XCURSOR
#endif

#if defined(QT_RUNTIME_XINPUT) && defined(QT_NO_RUNTIME_XINPUT)
# undef QT_RUNTIME_XINPUT
#elif !defined(QT_RUNTIME_XINPUT) && !defined(QT_NO_RUNTIME_XINPUT)
# define QT_RUNTIME_XINPUT
#endif

#endif // QT_BOOTSTRAPPED

#define QT_VISIBILITY_AVAILABLE

