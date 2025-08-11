// Sound Effects for ArchiveBlaster

class SoundEffects {
    constructor() {
        this.sounds = {};
        this.enabled = true;
        this.volume = 0.3;
        this.init();
    }

    init() {
        this.createSounds();
        this.loadSettings();
    }

    // Create audio contexts and sounds
    createSounds() {
        // Modal open sound
        this.sounds['modal-open'] = this.createTone(800, 0.1, 'sine');
        
        // Modal close sound
        this.sounds['modal-close'] = this.createTone(600, 0.1, 'sine');
        
        // File select sound
        this.sounds['file-select'] = this.createTone(1000, 0.05, 'square');
        
        // File added sound
        this.sounds['file-added'] = this.createTone(1200, 0.08, 'triangle');
        
        // File drop sound
        this.sounds['file-drop'] = this.createTone(1400, 0.1, 'sawtooth');
        
        // Process complete sound
        this.sounds['process-complete'] = this.createSuccessChord();
        
        // Archive create sound
        this.sounds['archive-create'] = this.createArchiveSound();
        
        // Archive extract sound
        this.sounds['archive-extract'] = this.createExtractSound();
        
        // Button click sound
        this.sounds['button-click'] = this.createTone(800, 0.05, 'sine');
        
        // Error sound
        this.sounds['error'] = this.createErrorSound();
        
        // Success sound
        this.sounds['success'] = this.createSuccessSound();
        
        // Launch sound
        this.sounds['launch'] = this.createLaunchSound();
        
        // AI analysis sound
        this.sounds['ai-analysis'] = this.createAISound();
        
        // Drag over sound
        this.sounds['drag-over'] = this.createTone(900, 0.03, 'sine');
        
        // Refresh sound
        this.sounds['refresh'] = this.createTone(700, 0.06, 'triangle');
        
        // Clear sound
        this.sounds['clear'] = this.createTone(500, 0.08, 'sawtooth');
        
        // Batch start sound
        this.sounds['batch-start'] = this.createBatchSound();
        
        // File process sound
        this.sounds['file-process'] = this.createProcessSound();
        
        // Folder select sound
        this.sounds['folder-select'] = this.createTone(1100, 0.07, 'triangle');
        
        // Archive select sound
        this.sounds['archive-select'] = this.createTone(1300, 0.06, 'square');
    }

    // Create a simple tone
    createTone(frequency, duration, type = 'sine') {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
                oscillator.type = type;
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create success chord
    createSuccessChord() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const frequencies = [523, 659, 784]; // C, E, G
                
                frequencies.forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                    oscillator.type = 'sine';
                    
                    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                    gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, audioContext.currentTime + 0.01);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3 + index * 0.1);
                    
                    oscillator.start(audioContext.currentTime + index * 0.1);
                    oscillator.stop(audioContext.currentTime + 0.3 + index * 0.1);
                });
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create archive creation sound
    createArchiveSound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.5);
                oscillator.type = 'sawtooth';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.5, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create extraction sound
    createExtractSound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.4);
                oscillator.type = 'triangle';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.4, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.4);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create error sound
    createErrorSound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const frequencies = [400, 350, 300];
                
                frequencies.forEach((freq, index) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                    oscillator.type = 'square';
                    
                    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                    gainNode.gain.linearRampToValueAtTime(this.volume * 0.4, audioContext.currentTime + 0.01);
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
                    
                    oscillator.start(audioContext.currentTime + index * 0.1);
                    oscillator.stop(audioContext.currentTime + 0.2 + index * 0.1);
                });
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create success sound
    createSuccessSound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.3);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.5, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create launch sound
    createLaunchSound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.8);
                oscillator.type = 'sawtooth';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.6, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.8);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.8);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create AI analysis sound
    createAISound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                // Create a complex AI-like sound
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(900, audioContext.currentTime + 0.2);
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.3);
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.4);
                oscillator.type = 'triangle';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.4, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.5);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create batch processing sound
    createBatchSound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(500, audioContext.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.2);
                oscillator.type = 'square';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.5, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Create file processing sound
    createProcessSound() {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(700, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1400, audioContext.currentTime + 0.2);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(this.volume * 0.3, audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
            } catch (error) {
                console.log('Audio not supported:', error);
            }
        };
    }

    // Play a sound
    playSound(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    // Toggle sound on/off
    toggleSound() {
        this.enabled = !this.enabled;
        this.saveSettings();
    }

    // Set volume
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        this.saveSettings();
    }

    // Load settings from localStorage
    loadSettings() {
        try {
            const settings = JSON.parse(localStorage.getItem('archiveBlaster_sound_settings') || '{}');
            this.enabled = settings.enabled !== undefined ? settings.enabled : true;
            this.volume = settings.volume !== undefined ? settings.volume : 0.3;
        } catch (error) {
            console.log('Error loading sound settings:', error);
        }
    }

    // Save settings to localStorage
    saveSettings() {
        try {
            const settings = {
                enabled: this.enabled,
                volume: this.volume
            };
            localStorage.setItem('archiveBlaster_sound_settings', JSON.stringify(settings));
        } catch (error) {
            console.log('Error saving sound settings:', error);
        }
    }
}

// Initialize sound effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.soundEffects = new SoundEffects();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SoundEffects;
} 